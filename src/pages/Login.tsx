import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import WelcomeModal from "../components/welcome-modal";

export default function AuthPage() {
    const [, setSearchParams] = useSearchParams();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalUsername, setModalUsername] = useState("");

    const handleSubmit = (e: React.FormEvent, action: string) => {
        e.preventDefault();

        // Save user details to localStorage
        localStorage.setItem("user", JSON.stringify({
            username,
            // In a real app, never store passwords in localStorage - this is just for demo!
            password,
            avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${username}` // Example avatar URL
        }));

        // Set the username for the modal
        setModalUsername(username);

        // Show the modal
        setShowModal(true);

        // Update URL parameters
        setSearchParams({ username, action });

    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-700 to-blue-900 p-4">
            <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="p-6">
                        <div className="mb-4 text-xl font-bold">Login</div>
                        <form onSubmit={(e) => handleSubmit(e, "login")} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="login-username" className="text-sm font-medium">
                                    Username
                                </label>
                                <Input
                                    id="login-username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="login-password" className="text-sm font-medium">
                                    Password
                                </label>
                                <Input
                                    id="login-password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700">
                                Login
                            </Button>
                        </form>
                    </TabsContent>

                    <TabsContent value="signup" className="p-6">
                        <div className="mb-4 text-xl font-bold">Sign Up</div>
                        <form onSubmit={(e) => handleSubmit(e, "signup")} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="signup-username" className="text-sm font-medium">
                                    Username
                                </label>
                                <Input
                                    id="signup-username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Choose a username"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="signup-password" className="text-sm font-medium">
                                    Password
                                </label>
                                <Input
                                    id="signup-password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Choose a password"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700">
                                Sign Up
                            </Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Welcome Modal */}
            <WelcomeModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                username={modalUsername}
            />
        </div>
    )
}

