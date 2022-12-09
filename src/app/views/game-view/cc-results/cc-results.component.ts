import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { MOCKMESSAGES } from 'mock-messages';
@Component({
  selector: 'app-cc-results',
  templateUrl: './cc-results.component.html',
  styleUrls: ['./cc-results.component.scss']
})
export class CcResultsComponent implements OnInit {

  gameId:string = "";
  messages:any[]=MOCKMESSAGES;


  constructor(private router:Router,private uploadService:UploadService) { }

  ngOnInit(): void {
    //this.uploadService.redirectIfGameNotSet()    
  }

  navigateToNext() {   
    this.router.navigate(['game/review'])
  }

  navigateToPrevious() {
    this.router.navigate(['game/upload'])
  }
}
