//
//  InstaMailViewController.h
//  InstaMail
//
//  Created by Michiel en Mirjam Overeem on 6/22/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface InstaMailViewController : UIViewController 
<UIPickerViewDataSource, UIPickerViewDelegate> { 
    NSArray* activities_;
    NSArray* feelings_;
    UIPickerView *pickerview_;
}

@property (nonatomic, retain) IBOutlet UIPickerView *pickerview;

- (IBAction) sendButtonTapped: (id) sender;


@end
