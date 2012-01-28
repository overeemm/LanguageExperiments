//
//  iDecide2AppDelegate.h
//  iDecide2
//
//  Created by Michiel en Mirjam Overeem on 6/22/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>

@class iDecide2ViewController;

@interface iDecide2AppDelegate : NSObject <UIApplicationDelegate> {

}

@property (nonatomic, retain) IBOutlet UIWindow *window;

@property (nonatomic, retain) IBOutlet iDecide2ViewController *viewController;

@end
