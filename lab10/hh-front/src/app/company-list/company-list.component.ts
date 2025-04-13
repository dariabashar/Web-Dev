import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { Vacancy } from '../vacancy';
import { CompanyService } from '../company.service';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyVacancies: Vacancy[] = [];

  constructor(
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  showVacancies(companyId: number): void {
    this.vacancyService.getCompanyVacancies(companyId).subscribe(data => {
      this.selectedCompanyVacancies = data;
    });
  }
}
