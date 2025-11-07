
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from './layout/PublicLayout';
import HomePage from './pages/HomePage';
import BookConsultation from "./components/BookConsultation";
import FamilyDisputeForm from "./forms/FamilyDisputeForm";
import FinancialDisputeForm from "./forms/FinancialDisputeForm";
import EmploymentDisputeForm from "./forms/EmploymentDisputeForm";
import ConsumerDisputeForm from "./forms/ConsumerDisputeForm";
import RulesPage from "./pages/RulePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/book-consultation" element={<BookConsultation />} />

          {/* forms */}
          <Route path="/family-dispute" element={<FamilyDisputeForm />} />
          <Route path="/financial-dispute" element={<FinancialDisputeForm />} />
          <Route path="/employment-dispute" element={<EmploymentDisputeForm />} />
          <Route path="/consumer-dispute" element={<ConsumerDisputeForm />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
