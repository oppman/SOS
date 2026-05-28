<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-87 flex justify-between ">
        <div class="flex flex-wrap justify-between gap-8">
            <!--this is about of footer-->
            <div>
                <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA URWANDA</h3>
                <p>Discover the beautity of the land Of thousand hills</p>
               
            </div>
        </div>
        <!--Quick links-->
        <div >
            <h3 class="text-yellow-300 font-bold text-lg mb-3 ">Quick Links</h3>
            <ul class="space-y-2 text-sm" >
                <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300">Home</RouterLink></li>
                <li><RouterLink to="/about" class="text-green-200 hover:text-yellow-300">About</RouterLink></li>
                <li><RouterLink to="/contact" class="text-green-200 hover:text-yellow-300">Contact</RouterLink></li>
                <li><RouterLink to="/Services" class="text-green-200 hover:text-yellow-300">Services</RouterLink></li>
            </ul>
        </div>
                <!--Destinations-->
        <div >
            <h3 class="text-yellow-300 font-bold text-lg mb-3 ">Destinations</h3>
            <ul class="space-y-2 text-sm" >
                <li><RouterLink to="/Kigali" class="text-green-200 hover:text-yellow-300">Kigali city</RouterLink></li>
                <li><RouterLink to="/Northern" class="text-green-200 hover:text-yellow-300">Norther Province</RouterLink></li>
                <li><RouterLink to="/Southern" class="text-green-200 hover:text-yellow-300">Southern province</RouterLink></li>
                <li><RouterLink to="/Western" class="text-green-200 hover:text-yellow-300">Western Province</RouterLink></li>
                <li><RouterLink to="/Eastern" class="text-green-200 hover:text-yellow-300">Eastern Province</RouterLink></li>
            </ul>
        </div>
                <!--Contact info-->
        <div >
            <h3 class="text-yellow-300 font-bold text-lg mb-3 ">Contacts</h3>
            <ul class="space-y-2 text-sm" >
                <li class="text-green-200 hover:text-yellow-300">Kigali-Kagugu</li>
                <li class="text-green-200 hover:text-yellow-300">0793118989</li>
                <li class="text-green-200 hover:text-yellow-300">ahantunyaburanga@gmail.com</li>
                <li class="text-green-200 hover:text-yellow-300"></li>
                
            </ul>
        </div>
        <div>
                <!--Place for copy right-->
        <div class="border-t border-white mt-8 pt-1 text-sm md:text-base fixed bottom-0 left-0 w-full  text-white py-1 background-green-200">
            <p class="text-center ">@2026 Visit Rwanda. All rights reserved. </p>  
        
        </div>
        </div>
    </footer>
</template>