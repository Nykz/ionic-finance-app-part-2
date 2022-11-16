import { AfterContentChecked, Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {

  accounts: any[] = [];
  bannerConfig: SwiperOptions;
  featureConfig: SwiperOptions;
  features: any[] = [];
  transactions: any[] = [];

  constructor() { }

  ngOnInit() {
    this.accounts = [
      { id: 1, acc_no: '57868945098', balance: '200000' },
      { id: 2, acc_no: '20067091201', balance: '50000' },
      { id: 3, acc_no: '40163081205', balance: '80000' }
    ];
    this.features = [
      { id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send' },
      { id: 2, color: 'white', icon: 'send', name: 'Request' },
      { id: 3, color: 'success', icon: 'add-circle', name: 'Top-up' },
      { id: 4, color: 'light', icon: 'newspaper', name: 'Bills' },
      { id: 5, color: 'warning', icon: 'card', name: 'Cards' },
    ];
    this.transactions = [
      { id: 1, to: 'Piyush Ag.', date: '2022-05-22', amount: 5000 },
      { id: 2, to: 'Avinash', date: '2022-03-02', amount: 7000 },
      { id: 3, to: 'Catherine', date: '2022-07-28', amount: -3250 },
      { id: 4, to: 'Akhil Ag.', date: '2022-01-09', amount: 1000 },
      { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
    ];
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      pagination: { clickable: true }
    };
    this.featureConfig = {
      slidesPerView: 3.5,
    };
  }

}
