import "./App.css";
import Dashboard from "./Components/Dashboard/Components/Dashboard/Dashboard";
import Home from "./Components/HomePage/Home";
import Infos from "./Components/Intro/Infos";
import Login from "./Components/Forms/Login/Login";
import Register from "./Components/Forms/Register/Register";
import CreateAds from "./Components/Forms/FormsAds/CreateAds";
import UserProfile from "./Components/Forms/Account/UserProfile";
import EditAccount from "./Components/Forms/Account/EditAccount";
import EditAd from "./Components/Forms/FormsAds/EditAd";
import UserOneAd from "./Components/Dashboard/Components/ListingSection/UserAds/UserOneAd";
import { Routes, Route } from "react-router-dom";
import RequireDataAuth from "./helpers/require-data-auth";
import Header from "./Components/HomePage/Header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<RequireDataAuth child={Home} auth={false} />}
                    />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route
                        exact
                        path="/editAccount"
                        element={
                            <RequireDataAuth child={EditAccount} auth={true} />
                        }
                    />
                    <Route
                        exact
                        path="/create"
                        element={
                            <RequireDataAuth child={CreateAds} auth={true} />
                        }
                    />
                    <Route
                        exact
                        path="/userOneAd/:adId"
                        element={
                            <RequireDataAuth child={UserOneAd} auth={false} />
                        }
                    />
                    <Route
                        exact
                        path="/dashboard"
                        element={
                            <RequireDataAuth child={Dashboard} auth={true} />
                        }
                    />
                    <Route
                        exact
                        path="/editAd/:adId"
                        element={<RequireDataAuth child={EditAd} auth={true} />}
                    />
                    <Route
                        exact
                        path="/userProfile/:cookerId"
                        element={
                            <RequireDataAuth child={UserProfile} auth={false} />
                        }
                    />
                    <Route exact path="/infos" element={<Infos />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
