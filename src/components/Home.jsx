
import React from 'react';
import { ArrowRight, Search, FileText, ShieldCheck } from 'lucide-react';
import trusunlogo from "../assets/Images/Trusunlogo.png";

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col relative overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000"></div>
                <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-3xl opacity-40 mix-blend-multiply animate-blob animation-delay-4000"></div>
            </div>

            {/* Navbar / Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={trusunlogo} alt="TRUE Brand" className="h-36 w-auto object-contain hover:scale-105 transition-transform duration-300" />
                    </div>
                    {/* <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
                        <button onClick={() => { }} className="hover:text-[#0F40C5] transition-colors">Support</button>
                        <button onClick={() => { }} className="hover:text-[#0F40C5] transition-colors">Contact</button>
                    </nav> */}
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center p-6 relative z-10">
                <div className="max-w-5xl w-full">

                    <div className="text-center space-y-8 mb-16 animate-in slide-in-from-bottom-10 fade-in duration-1000">

                        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#0F40C5] to-slate-900 tracking-tighter pb-4 drop-shadow-sm animate-gradient-x">
                            TRUE SUN
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                            <span className="text-slate-800">UNIQUE SOLUTIONS</span> FOR RESIDENTIALS & INDUSTRIES
                            <br className="hidden md:block" />
                            <span className="text-base text-slate-400 font-normal mt-2 block">Premium verification services at your fingertips.</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Submit Request Card */}
                        <div
                            onClick={() => window.location.href = '/?form=true'}
                            className="group relative bg-white/60 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-white/60 hover:border-blue-200 hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700 rotate-12">
                                <FileText size={180} />
                            </div>

                            <div className="relative z-10 flex flex-col items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F40C5] to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <FileText size={32} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-slate-800 mb-2 group-hover:text-[#0F40C5] transition-colors">New Request</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed">Submit details for a new installation site verification securely.</p>
                                </div>
                                <button
                                    className="mt-2 flex items-center gap-3 text-[#0F40C5] font-bold text-lg group-hover:gap-5 transition-all"
                                >
                                    Start Now <ArrowRight size={22} />
                                </button>
                            </div>
                        </div>

                        {/* Track Request Card */}
                        <div
                            onClick={() => window.location.href = '/?track=true'}
                            className="group relative bg-white/60 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-white/60 hover:border-indigo-200 hover:shadow-indigo-500/20 transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700 rotate-12">
                                <Search size={180} />
                            </div>

                            <div className="relative z-10 flex flex-col items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg shadow-slate-500/30 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                                    <Search size={32} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-slate-800 mb-2 group-hover:text-[#0F40C5] transition-colors">Track Status</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed">Check the real-time progress of your submitted verification.</p>
                                </div>
                                <button
                                    className="mt-2 flex items-center gap-3 text-slate-700 font-bold text-lg group-hover:gap-5 transition-all group-hover:text-[#0F40C5]"
                                >
                                    Check Status <ArrowRight size={22} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-4 rounded-2xl bg-white/50 border border-white/60">
                            <div className="font-bold text-2xl text-slate-800 mb-1">10k+</div>
                            <div className="text-slate-500 text-sm">Installations Verified</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/50 border border-white/60">
                            <div className="font-bold text-2xl text-slate-800 mb-1">24h</div>
                            <div className="text-slate-500 text-sm">Average Turnaround</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/50 border border-white/60">
                            <div className="font-bold text-2xl text-slate-800 mb-1">100%</div>
                            <div className="text-slate-500 text-sm">Secure Data</div>
                        </div>
                    </div> */}
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 text-center text-slate-400 text-sm bg-white/50 backdrop-blur-sm border-t border-white/20 relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <ShieldCheck size={16} />
                    <span>Secure Verification Portal</span>
                </div>
                <p>&copy; {new Date().getFullYear()} Truesun. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default Home;
