//
//  iDecide2ViewController.h
//  iDecide2
//
//  Created by Michiel en Mirjam Overeem on 6/22/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface iDecide2ViewController : UIViewController {
    UILabel *decisionText_;
}

@property (retain, nonatomic) IBOutlet UILabel *decisionText;

-(IBAction)buttonPressed:(id)sender;

@end
