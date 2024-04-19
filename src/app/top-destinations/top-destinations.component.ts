import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../models/Hotel';
import { HotelService } from '../services/HotelService';

@Component({
  selector: 'app-top-destinations',
  templateUrl: './top-destinations.component.html',
  styleUrls: ['./top-destinations.component.css']
})
export class TopDestinationsComponent implements OnInit {
  regionId!: number; // Change type to number
  hotels!: Hotel[];

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.regionId = Number(params.get('regionId')); // Convert to number
      this.getHotelsByRegion(this.regionId);
    });
  }

  getHotelsByRegion(regionId: number): void {
    this.hotelService.getHotelsByRegion(regionId).subscribe(
      (hotels: Hotel[]) => {
        this.hotels = hotels;
      },
      (error) => {
        console.error('Error fetching hotels by region:', error);
      }
    );
  }
}
