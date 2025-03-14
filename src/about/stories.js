import './stories.css';

function Stories() {
    return (
        <div>
            <div class="storiestwomain">
                <div class="stroiesfirst">
                    <div class="newsandline">
                        <div class="news">
                            Newsroom
                        </div>
                        <div class="storiesline">
                        </div>
                    </div>
                    <div class="storiesimg">
                        <img src={require('./newsroomimg.jpeg')}></img>
                    </div>
                    <div class="blackdiv">
                        <div class="blackdivtext">
                            Flipkart Ventures invites applications for the third ‘Flipkart Leap Ahead’ cohort
                        </div>
                        <div class="dateandarrow">
                            <div class="date">
                                April 22, 2024
                            </div>
                            <div class="arrow">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="storiessecond">
                    <div class="storiesbutton">
                        VIEW ALL NEWS
                    </div>
                    <div class="nextbutton">
                        NEXT
                    </div>
                    <div class="firstnewsdiv">
                        <div class="firstnews">
                            Flipkart’s VIP Subscription Program is now available for customers in Ahmedabad, Bhubaneswar, Coimbatore, Guwahati,
                        </div>
                        <div class="firstnewsdate">April 17, 2024</div>
                        <div class="firstnewsline"></div>
                    </div>
                    <div class="secondnewsdiv">
                        <div class="secondnews">
                        Flipkart announces the 6th edition of Super Cooling Days 2024 – An annual sale event for cooling home appliances
                        </div>
                        <div class="secondnewsdate">April 16, 2024</div>
                        <div class="secondnewsline"></div>
                    </div>
                    <div class="thirdnewsdiv">
                        <div class="thirdnews">
                        Flipkart opens its grocery fulfillment center in Hubli, Karnataka; offers next-day grocery deliveries to consumers
                        </div>
                        <div class="thirdnewsdate">April 11, 2024</div>
                        <div class="thirdnewsline"></div>
                    </div>
                    <div class="forthnewsdiv">
                        <div class="forthnews">
                        Flipkart opens its grocery fulfillment center in Visakhapatnam, Andhra Pradesh; enabling next-day grocery deliveries for
                        </div>
                        <div class="forthnewsdate">April 10, 2024</div>
                        <div class="forthnewsline"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stories;
