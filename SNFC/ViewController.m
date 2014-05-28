//
//  ViewController.m
//  SNFC
//
//  Created by delgersuren bold on 5/16/14.
//  Copyright (c) 2014 delgersuren bold. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
@end

@implementation ViewController
@synthesize webView;

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    NSString *path = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html" inDirectory:@"web"];
    NSURL *url = [NSURL fileURLWithPath:path];
    NSURLRequest * request = [NSURLRequest requestWithURL:url];
    [webView loadRequest:request];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)dealloc {
    [webView release];
    [super dealloc];
}

@end
