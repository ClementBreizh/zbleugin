import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Candidate} from '../../models/candidate';
import {CandidateApiService} from '../../services/candidate-api.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {tap} from 'rxjs/operators';
import {AcquiredMatterApiService} from '../../services/acquired-matter-api.service';
import {Session} from '../../models/session';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  candidate: Candidate;

  actualSession: Session;

  constructor(private apiCandidate: CandidateApiService, private route: ActivatedRoute, private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer, private apiAm: AcquiredMatterApiService) {
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.apiCandidate
          .getOne(params.id)
          .subscribe((value: Candidate) => {
            this.candidate = value;
            if (this.candidate.companySession.length > 0) {
              this.actualSession = this.candidate.companySession[this.candidate.companySession.length - 1].session;
            }
          });
      }
    });
  }

  onDeleteDegree(index: number) {

    // TODO: Delete les 2 d'un coup
    this.route.params
      .subscribe(params => {
        // FIXME: Should manage not found (interceptor).
        if (params.id) {
          this
            .apiCandidate
            .getOne(params.id)
            .pipe(tap(e => this.candidate = e))
            .subscribe(e => {
              this.candidate = e;
              this.candidate.degrees.splice(index, 1);
              this.apiCandidate.edit(this.candidate.id, this.candidate).subscribe();
              // window.location.reload();
            });
        }
      });
  }

  onDeleteAssessment(index: number) {

    // TODO: Delete les 2 d'un coup
    this.route.params
      .subscribe(params => {
        // FIXME: Should manage not found (interceptor).
        if (params.id) {
          this
            .apiCandidate
            .getOne(params.id)
            .pipe(tap(e => this.candidate = e))
            .subscribe(e => {
              this.candidate = e;
              this.candidate.assessments.splice(index, 1);
              this.apiCandidate.edit(this.candidate.id, this.candidate).subscribe();
              // window.location.reload();
            });
        }
      });
  }

  addAcquiredMatter($event) {
    console.log($event);
    this.candidate.matters.push($event);
  }

  onDeleteMatter(id: number, index: number) {
    this.candidate.matters.splice(index, 1);
    return this.apiAm.deleteOne(id).subscribe();
  }
}
