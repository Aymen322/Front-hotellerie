import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/Hotel';
import { Region } from '../models/Region'; 
import { HotelService } from '../services/HotelService';
import { RegionService } from '../services/RegionService'; 

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  hotels: Hotel[] = [];
  regions: Region[] = []; // Array to store regions

  constructor(
    private hotelService: HotelService,
    private regionService: RegionService // Inject RegionService
  ) { }

  ngOnInit(): void {
    // Fetch hotels
    this.hotelService.getHotels().subscribe(
      (hotels: Hotel[]) => {
        this.hotels = hotels;
      },
      (error) => {
        console.error('Error fetching hotels:', error);
      }
    );

    // Fetch regions
    this.regionService.getRegions().subscribe(
      (regions: Region[]) => {
        this.regions = regions;
      },
      (error) => {
        console.error('Error fetching regions:', error);
      }
    );
  }
}
