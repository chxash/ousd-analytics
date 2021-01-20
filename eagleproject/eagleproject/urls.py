"""eagleproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core import views as core_views
from notify import views as notify_views

urlpatterns = [
    path("", core_views.dashboard),
    path("tx/debug/<slug:tx_hash>", core_views.tx_debug),
    path("address/<slug:address>", core_views.address, name="address"),
    path("apr", core_views.apr_index),
    path("supply", core_views.supply),
    path("reload", core_views.reload),
    path("api/v1/apr/trailing", core_views.api_apr_trailing),
    path("api/v1/ratios", core_views.api_ratios),
    path("api/v1/speed_test", core_views.api_speed_test),
    path("runtriggers", notify_views.run_triggers),
    path("notifygc", notify_views.gc),
    # path('admin/', admin.site.urls),
    path("api/v1/staking_stats", core_views.staking_stats),
    path("api/v1/staking_stats_by_duration", core_views.staking_stats_by_duration),
]
