import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../models/Hotel';
import { HotelService } from '../services/HotelService';
import { Region } from '../models/Region';
import { RegionService } from '../services/RegionService';

@Component({
  selector: 'app-top-search',
  templateUrl: './top-search.component.html',
  styleUrls: ['./top-search.component.css']
})
export class TopSearchComponent implements OnInit {
  regionName!: string;
  allHotels: Hotel[] = [];
  filteredHotels: Hotel[] = [];
  selectedRegion: Region | undefined;
  regions: Region[] = [];

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private regionService: RegionService
  ) { }

  ngOnInit(): void {
    // Retrieve the region name parameter from the route
    this.route.queryParams.subscribe(params => {
      this.regionName = params['region'];
      console.log('Region Name:', this.regionName); // Debug log
      // Fetch all regions to find the specified region
      this.regionService.getRegions().subscribe(
        (regions: Region[]) => {
          this.regions = regions;
          // Find the region object with the specified name
          this.selectedRegion = this.regions.find(region => region.name === this.regionName);
          console.log('Found Region:', this.selectedRegion); // Debug log
          if (this.selectedRegion) {
            // Fetch all hotels
            this.hotelService.getHotels().subscribe(
              (hotels: Hotel[]) => {
                this.allHotels = hotels;
                console.log('All Hotels:', this.allHotels); // Debug log
                // Filter hotels based on region ID
                this.filteredHotels = this.allHotels.filter(hotel => hotel.region_id === this.selectedRegion!.id);
                console.log('Filtered Hotels:', this.filteredHotels); // Debug log
              },
              (error) => {
                console.error('Error fetching hotels:', error);
              }
            );
          } else {
            console.error('Region not found:', this.regionName);
          }
        },
        (error) => {
          console.error('Error fetching regions:', error);
        }
      );
    });
  }
}
