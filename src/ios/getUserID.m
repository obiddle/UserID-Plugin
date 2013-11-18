#import "getUserID.h"
#import <Cordova/CDV.h>

@implementation MyPluginX

- (void)sayHello:(CDVInvokedUrlCommand*)command
{
  CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Hello - woah, this guy :)"];
    NSString* user_uuid = [command.arguments objectAtIndex:0];
    
    if (user_uuid != nil) {
        NSLog(@"user_id = %@", user_uuid);
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg was null"];
    }
  [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    
}

@end