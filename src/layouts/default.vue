<template>
  <div class="flex h-screen font-roboto">
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Navbar />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-white xl:rounded-tl-xl xl:shadow-lg">
        <div class="container mx-auto px-6 py-8">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>