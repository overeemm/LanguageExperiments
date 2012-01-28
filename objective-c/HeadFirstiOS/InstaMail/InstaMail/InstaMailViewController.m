//
//  InstaMailViewController.m
//  InstaMail
//
//  Created by Michiel en Mirjam Overeem on 6/22/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import "InstaMailViewController.h"

@implementation InstaMailViewController
@synthesize pickerview=pickerview_;

#pragma mark picker datasource code

- (NSInteger)numberOfComponentsInPickerView:(UIPickerView *) pickerView {
    return 2;
}

- (NSInteger)pickerView:(UIPickerView *)pickerView numberOfRowsInComponent :(NSInteger)component {
    if (component == 0) { 
        return [activities_ count];
    }	
    else { 
        return [feelings_ count]; 
    }
}

- (NSString *)pickerView:(UIPickerView *)pickerView titleForRow:(NSInteger)row forComponent: (NSInteger)component {
    if (component == 0) { 	
        return [activities_ objectAtIndex:row];
    } else { 
        return [feelings_ objectAtIndex:row]; 
    }
    return nil;
}

- (IBAction) sendButtonTapped: (id) sender 
{ 
    NSString* theMessage = [NSString stringWithFormat:@"I’m %@ and feeling %@ about it.",
                                [activities_ objectAtIndex:[pickerview_ selectedRowInComponent:0]]
                              , [feelings_ objectAtIndex:[pickerview_                                                     selectedRowInComponent:1]]]; 
    
    NSLog(@"%@",theMessage);
    
    NSLog(@"Email button tapped!");
}

#pragma mark _

- (void)dealloc
{
    [pickerview_ release];
    [activities_ release]; 
    [feelings_ release];
    [super dealloc];
}

- (void)didReceiveMemoryWarning
{
    // Releases the view if it doesn't have a superview.
    [super didReceiveMemoryWarning];
    
    // Release any cached data, images, etc that aren't in use.
}

#pragma mark - View lifecycle


// Implement viewDidLoad to do additional setup after loading the view, typically from a nib.
- (void)viewDidLoad
{
    [super viewDidLoad];
    activities_ = [[NSArray alloc] initWithObjects: @"sleeping", @"eating", @"working",                    
                                                    @"thinking", @"crying", @"begging", 
                                                    @"leaving", @"shopping", 
                                                    @"hello worlding", nil];
    feelings_ = [[NSArray alloc] initWithObjects: @"awesome", @"sad", @"happy", 
                                                  @"ambivalent", @"nauseous", @"psyched", 
                                                  @"confused", @"hopeful", @"anxious", nil];
}


- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

@end
