import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';
import avatar3 from './avatar3.png';
import axios from 'axios';

export default function Messenger() {

    return (
        <div class="mx-auto">
            <div class="min-w-full border rounded grid grid-cols-3">
                <div class="border-r border-gray-300 lg:col-span-1">
                    <ul class="overflow-auto h-[32rem]">
                        <li>
                            <div class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                                <img class="object-cover w-10 h-10 rounded-full"
                                    src={avatar1} alt="username" />
                                <div class="w-full pb-2">
                                    <div class="flex justify-between">
                                        <span class="block ml-2 font-semibold text-gray-600">RI Brar</span>
                                        <span class="block ml-2 text-sm text-gray-600">25 minutes</span>
                                    </div>
                                    <span class="block ml-2 text-sm text-gray-600">bye</span>
                                </div>
                            </div>
                            <div class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
                                <img class="object-cover w-10 h-10 rounded-full"
                                    src={avatar2} alt="username" />
                                <div class="w-full pb-2">
                                    <div class="flex justify-between">
                                        <span class="block ml-2 font-semibold text-gray-600">Jashan</span>
                                        <span class="block ml-2 text-sm text-gray-600">50 minutes</span>
                                    </div>
                                    <span class="block ml-2 text-sm text-gray-600">Alright</span>
                                </div>
                            </div>
                            <div class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                                <img class="object-cover w-10 h-10 rounded-full"
                                    src={avatar3} alt="username" />
                                <div class="w-full pb-2">
                                    <div class="flex justify-between">
                                        <span class="block ml-2 font-semibold text-gray-600">Sam</span>
                                        <span class="block ml-2 text-sm text-gray-600">3 hour</span>
                                    </div>
                                    <span class="block ml-2 text-sm text-gray-600">What's up?</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-span-2 lg:block">
                    <div class="w-full">
                        <div class="relative flex items-center p-3 border-b border-gray-300">
                            <img class="object-cover w-10 h-10 rounded-full"
                                src={avatar2} alt="username" />
                            <span class="block ml-2 font-bold text-gray-600">Jashan</span>
                            <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
                            </span>
                        </div>
                        <div class="relative w-full p-6 overflow-y-auto h-[38rem]">
                            <ul class="space-y-2">
                                <li class="flex justify-start">
                                    <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                                        <span class="block">Hi Prabhjot, which frameworks are you using?</span>
                                    </div>
                                </li>
                                <li class="flex justify-end">
                                    <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                        <span class="block">Hi Jashan</span>
                                    </div>
                                </li>
                                <li class="flex justify-end">
                                    <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                        <span class="block">I will be using next.js, mongoDb and sockets for backend.</span>
                                    </div>
                                </li>
                                <li class="flex justify-end">
                                    <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                        <span class="block">And react with tailwind css for frontend.</span>
                                    </div>
                                </li>
                                <li class="flex justify-start">
                                    <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                                        <span class="block">Alright, all the best!
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="flex items-center justify-between w-full p-3 border-t border-gray-300">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                            </button>

                            <input type="text" placeholder="Message"
                                class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                                name="message" required />
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </button>
                            <button type="submit">
                                <svg class="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}