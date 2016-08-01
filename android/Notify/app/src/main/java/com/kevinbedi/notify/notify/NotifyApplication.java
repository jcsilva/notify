package com.kevinbedi.notify.notify;

import android.app.Application;
import android.content.Intent;
import android.support.v4.content.LocalBroadcastManager;

import com.parse.Parse;
import com.parse.ParseException;
import com.parse.ParseInstallation;
import com.parse.ParsePush;
import com.parse.SaveCallback;

public class NotifyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        Parse.initialize(new Parse.Configuration.Builder(this)
                .applicationId("T5rfG0KnZ2t7RCm1EcqKstuPqrt0RmfAz3Upcq9a")
                .clientKey("j9RIdREn4Aa8p3ZuO1uMBE4UvUhNoO44RAlx2wHf")
                .server("https://parseapi.back4app.com")
                .build());
        ParseInstallation.getCurrentInstallation().saveInBackground(new SaveCallback() {
            @Override
            public void done(ParseException e) {
                Intent intent = new Intent(MainActivity.UPDATE_TEXT_INTENT_ACTION);
                LocalBroadcastManager lbm = LocalBroadcastManager.getInstance(
                        getApplicationContext());
                lbm.sendBroadcast(intent);
                ParsePush.subscribeInBackground(
                        ParseInstallation.getCurrentInstallation().getObjectId());
            }
        });
    }
}
