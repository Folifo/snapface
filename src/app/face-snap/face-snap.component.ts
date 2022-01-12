import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FaceSnap } from '../models/FaceSnap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  IsSnapped: boolean = false;
  buttonText!: string;

  constructor(private faceSnapsService : FaceSnapsService, private route : Router){}
  ngOnInit(): void {
  this.buttonText = 'Oh Snap!';
  }

  onSnap(){
    if(this.IsSnapped){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.buttonText = 'Oh Snap!';
      this.IsSnapped=false;
    }else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
      this.buttonText = 'Oh Unsnap!';
      this.IsSnapped=true;
    }
  }

  onViewFaceSnap(){
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
