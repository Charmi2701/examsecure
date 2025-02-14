import SignIn from '../authentication/SignIn.js';
import SignUp from '../authentication/SignUp.js';
import AddData from '../components/addData/flaggedData/add_data';
import AdminHome from '../components/admin_home.js';
import ProctorPage from '../components/proctor/proctor_page.js';
import DisqualifiedUsers from '../components/disqualified/disqualified_page.js';
import ImageDetail from '../components/proctor/image_detail.js';
import StudentPage from '../components/students/student_page';
import AddQuestions from '../components/addData/createTest/add_questions';
import Tests from '../components/Tests/Tests';
import Dashboard from '../components/ProctorDashboard/Dashboard';
import ProctorMode from '../components/ProctorDashboard/ProctorMode.js';

const routes = [
  {
    path: '/',
    component: AdminHome,
    title: 'Admin Home',
  },
  {
    path: '/signin',
    component: SignIn,
    title: 'Sign In',
  },
  {
    path: '/signup',
    component: SignUp,
    title: 'Sign Up',
  },
  // {
  //     path: '/adddata',
  //     component: AddData,
  //     title: 'Add Data'
  // },
  {
    path: '/proctorpage',
    component: ProctorPage,
    title: 'Proctor Page',
  },
  {
    path: '/disqualifiedusers',
    component: DisqualifiedUsers,
    title: 'Disqualified Users',
  },
  {
    path: '/imagedetail/:testnumber/:id',
    component: ImageDetail,
    title: 'Details of Triggered User',
  },
  {
    path: '/studentpage',
    component: StudentPage,
    title: 'Student Details Page',
  },
  {
    path: '/add-questions',
    component: AddQuestions,
    title: 'Add Questions',
  },
  {
    path: '/tests',
    component: Tests,
    title: 'Tests',
  },
  {
    path: '/dashboard',
    component: Dashboard,
    title: 'Dashboard',
  },
  {
    path: '/tests/:id/proctormode',
    component: ProctorMode,
    title: 'Proctor Mode',
  },
];

export default routes;
