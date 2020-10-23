/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToHome() {
  NavigationService.navigate('OTP', {});
}

export function myJobsPage() {
  NavigationService.navigate('MyJobs', {});
}

export function navigaetToBoarding() {
  NavigationService.navigate('Boarding');
}
