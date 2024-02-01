<template>
    <header>
        <div class="navleft w_100">
            <nav class="navbar navbar-expand-lg d-flex">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                    aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="hambergerIcon"></div>
                </button>
                <a class="logo_outer d-flex align_center" href="#">
                    <div class="logo w_15">
                        <img src="../assets/page1/WRWSR_LOGO_Only.svg" alt="">
                    </div>
                    <div class="navbar-brand">
                        <span>查詢工具平台</span>
                    </div>
                </a>
                <div class="btn-group pc_hide sm_admin_acc" style="z-index:1300">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ti ti-user-circle"> </i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <a class="dropdown-item" href="#">變更密碼</a>
                        </li>
                        <li>
                            <a class="dropdown-item"
                            href="#">登出</a>
                        </li>
                    </ul>
                </div>
                <div class="collapse navbar-collapse justify-content-between" id="main_nav">
                    <ul class="navbar-nav">

                        <li id="MenuID1" class="nav-item dropdown rain_menu active">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
                                管理處灌溉用水資料</a>
                            <ul class="dropdown-menu menu1">
                                <li>
                                    <a class="dropdown-item" href="/">
                                        <div class="outer d-flex align_center justify-content-between">
                                            <div class="link_item">
                                                <i class="ti ti-clock-hour-4"></i>
                                                <span class="">用水紀錄查詢</span>
                                            </div>
                                            <i class="ti ti-chevron-right">
                                            </i>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <div class="outer d-flex align_center justify-content-between">
                                            <div class="link_item">
                                                <i class="ti ti-history"></i>
                                                <span class="">灌溉用水資料統計</span>
                                            </div>
                                            <i class="ti ti-chevron-right">
                                            </i>
                                        </div>
                                    </a>
                                    <ul class="submenu dropdown-menu">
                                        <li>
                                            <a class="dropdown-item link_1" href="1-2-1">
                                                歷史面積資料統計</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item link_1" href="1-2-2">
                                                歷史旬用水量統計</a>
                                        </li>
                                    </ul>
                                </li>


                            </ul>
                        </li>
                        <li id="MenuID200" class="nav-item dropdown water_menus">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
                                水庫型灌區用水資料</a>
                            <ul class="dropdown-menu menu1">
                                <li>
                                    <a class="dropdown-item link_1"
                                    href="2-1">
                                        <i class="ti ti-droplet-half-2">&nbsp;</i>水庫用水紀錄查詢</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <div class="outer d-flex align_center justify-content-between">
                                            <div class="link_item">
                                                <i class="ti ti-clock-hour-4"></i>
                                                <span class="">灌溉用水資料統計</span>
                                            </div>
                                            <i class="ti ti-chevron-right">
                                            </i>
                                        </div>
                                    </a>
                                    <ul class="submenu dropdown-menu">
                                        <li>
                                            <a class="dropdown-item link_1" href="2-2-1">
                                                歷史面積資料統計</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item link_1" href="2-2-2">
                                                歷史旬用水量統計</a>
                                        </li>

                                    </ul>
                                </li>

                            </ul>
                        </li>
                        <li id="MenuID300" class="nav-item dropdown farm_menu">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
                                歷年停灌資訊</a>
                        </li>
                    </ul>
                    <input type="hidden" id="RootMenuID" value="1"> <!--使用者個人相關功能區塊-->
                    <form action="https://wrwsr.triwra.org.tw/Account/LogOff" class="navbar-right" id="logoutForm"
                        method="post"><input name="__RequestVerificationToken" type="hidden"
                            value="5ehbTgzZdDM8ogVH4RSKFwaWw8UJM3PtDL5eu8AQP_kJEPwfjBKmZokk1TsKoHdQhuDEVHvD9y7AL2HTGMjbZ5or7jAG8EFUdg8cbkODIznD9UmZAa5tOOvylwP_cAR5UtZir6A5X5AFtk4yBSzZ3g2">
                        <ul class="navbar-nav admin_acc tablet_hide">
                            <li id="MenuID0" class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                href="#">
                                    <div class="outer d-flex align_center">
                                        <i class="bi bi-person-circle"></i>
                                        <span>
                                            使用者 </span>
                                    </div>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end menu1">
                                    <li>
                                        <a class="dropdown-item"
                                        href="#">變更密碼</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                        href="#">登出</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import 'bootstrap-icons/font/bootstrap-icons.css';

</script>

<style scoped lang="scss"></style>