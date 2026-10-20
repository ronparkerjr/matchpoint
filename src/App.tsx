import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Memberships from "./pages/Memberships";
import DropIn from "./pages/memberships/DropIn";
import Elite from "./pages/memberships/Elite";
import SilverSneakers from "./pages/memberships/SilverSneakers";
import BadmintonMember from "./pages/memberships/BadmintonMember";
import TableTennisMember from "./pages/memberships/TableTennisMember";
import Tier1Serve from "./pages/memberships/Tier1Serve";
import Tier2Drive from "./pages/memberships/Tier2Drive";
import OffPeakUnlimited from "./pages/memberships/OffPeakUnlimited";
import SilverSneakersPlus from "./pages/memberships/SilverSneakersPlus";
import EliteCouple from "./pages/memberships/EliteCouple";
import EliteFamily from "./pages/memberships/EliteFamily";

import FAQ from "./pages/FAQ";
import Leagues from "./pages/Leagues";
import Programs from "./pages/Programs";
import OrthoAlliance from "./pages/OrthoAlliance";
import TrackmanGolf from "./pages/TrackmanGolf";
import TableTennis from "./pages/TableTennis";
import Photos from "./pages/Photos";
import Announcements from "./pages/Announcements";
import ReserveACourt from "./pages/ReserveACourt";
import NotFound from "./pages/NotFound";
import Pickleball from "./pages/Pickleball";
import PickleballInstruction from "./pages/PickleballInstruction";
import PlayerShowcase from "./pages/PlayerShowcase";
import Badminton from "./pages/Badminton";
import Sponsors from "./pages/Sponsors";
import BecomeASponsor from "./pages/BecomeASponsor";
import SponsorshipDeck from "./pages/SponsorshipDeck";
import MemberOfTheMonth from "./pages/MemberOfTheMonth";
import EmployeeOfTheMonth from "./pages/EmployeeOfTheMonth";
import NominateMember from "./pages/NominateMember";
import NominateEmployee from "./pages/NominateEmployee";
import Employment from "./pages/Employment";
import EventResults from "./pages/EventResults";
import ContactUs from "./pages/ContactUs";
import Videos from "./pages/Videos";
import MatchPointLive from "./pages/MatchPointLive";
import Playsight from "./pages/Playsight";
import OurFacility from "./pages/OurFacility";
import Events from "./pages/Events";
import CorpMemberships from "./pages/CorpMemberships";
import PreferredHotels from "./pages/PreferredHotels";
import PickleballLessonsColumbus from "./pages/PickleballLessonsColumbus";
import LeeWhitwellClinics from "./pages/LeeWhitwellClinics";
import PickleballLeaguesColumbus from "./pages/PickleballLeaguesColumbus";
import IndoorPickleballCourtsColumbus from "./pages/IndoorPickleballCourtsColumbus";
import BookPickleballCourtColumbus from "./pages/BookPickleballCourtColumbus";

import NearbyCityLanding from "./pages/NearbyCityLanding";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import ResetPassword from "./pages/ResetPassword";
import { NEARBY_CITIES } from "./data/nearbyCities";
import ScrollToTop from "./components/ScrollToTop";
import RouteSEO from "./components/RouteSEO";
import AnalyticsTracker from "./components/AnalyticsTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        
        <ScrollToTop />
        <RouteSEO />
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/about" element={<About />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/memberships/drop-in" element={<DropIn />} />
          <Route path="/memberships/elite" element={<Elite />} />
          <Route path="/memberships/silver-sneakers" element={<SilverSneakers />} />
          <Route path="/memberships/badminton-member" element={<BadmintonMember />} />
          <Route path="/memberships/table-tennis-member" element={<TableTennisMember />} />
          <Route path="/memberships/tier-1-serve" element={<Tier1Serve />} />
          <Route path="/memberships/tier-2-drive" element={<Tier2Drive />} />
          <Route path="/memberships/off-peak-unlimited" element={<OffPeakUnlimited />} />
          <Route path="/memberships/silver-sneakers-plus" element={<SilverSneakersPlus />} />
          <Route path="/memberships/elite-couple" element={<EliteCouple />} />
          <Route path="/memberships/elite-family" element={<EliteFamily />} />
          
          <Route path="/faq" element={<FAQ />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/ortho-alliance" element={<OrthoAlliance />} />
          <Route path="/trackman-golf" element={<TrackmanGolf />} />
          <Route path="/table-tennis" element={<TableTennis />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/reserve-a-court" element={<ReserveACourt />} />
          <Route path="/pickleball" element={<Pickleball />} />
          <Route path="/pickleball-instruction" element={<PickleballInstruction />} />
          <Route path="/player-showcase" element={<PlayerShowcase />} />
          <Route path="/badminton" element={<Badminton />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/become-a-sponsor" element={<BecomeASponsor />} />
          <Route path="/sponsorship-deck" element={<SponsorshipDeck />} />
          <Route path="/member-of-the-month" element={<MemberOfTheMonth />} />
          <Route path="/member-of-the-week" element={<Navigate to="/member-of-the-month" replace />} />
          <Route path="/employee-of-the-month" element={<EmployeeOfTheMonth />} />
          <Route path="/nominate-a-member" element={<NominateMember />} />
          <Route path="/nominate-an-employee" element={<NominateEmployee />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/event-results" element={<EventResults />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/matchpoint-live" element={<MatchPointLive />} />
          <Route path="/playsight" element={<Playsight />} />
          <Route path="/our-facility" element={<OurFacility />} />
          <Route path="/private-events" element={<Events />} />
          <Route path="/corp-memberships" element={<CorpMemberships />} />
          <Route path="/preferred-hotels" element={<PreferredHotels />} />
          <Route path="/pickleball-lessons-columbus" element={<PickleballLessonsColumbus />} />
          <Route path="/lee-whitwell-clinics" element={<LeeWhitwellClinics />} />
          <Route path="/pickleball-leagues-columbus" element={<PickleballLeaguesColumbus />} />
          <Route path="/indoor-pickleball-courts-columbus" element={<IndoorPickleballCourtsColumbus />} />
          <Route path="/book-pickleball-court-columbus" element={<BookPickleballCourtColumbus />} />

          {NEARBY_CITIES.map((city) => (
            <Route key={city.path} path={city.path} element={<NearbyCityLanding city={city} />} />
          ))}
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

