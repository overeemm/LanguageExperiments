//
//  InstaMailAppDelegate.h
//  InstaMail
//
//  Created by Michiel en Mirjam Overeem on 6/22/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>

@class InstaMailViewController;

@interface InstaMailAppDelegate : NSObject <UIApplicationDelegate> {

}

@property (nonatomic, retain) IBOutlet UIWindow *window;

@property (nonatomic, retain) IBOutlet InstaMailViewController *viewController;

@end
