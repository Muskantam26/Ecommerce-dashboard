import { Routes, Route } from "react-router-dom";
import Layout from "../component/Layout";
import Dashboard from "../page/Dashboard";
import ComingSoon from "../page/ComingSoon";
import StoreAnalytical from "../page/StroyAnalytical";
import ThemeCustomize from "../page/ThemeCustomize";
import Roles from "../page/Roles";
import Users from "../page/Users";
import Deliveryboy from "../page/Deliveryboy";
import Brand from "../page/Brand";
import Lable from "../page/Lable";
import Category from "../page/Category";
import Product from "../page/Product";
import Attributes from "../page/Attributes";
import Testimonial from "../page/Testimonial";
import QA from "../page/QA";
import ShippingClass from "../page/ShippingClass";
import Order from "../page/Order";
import ShippingZone from "../page/ShippingZone";
import Customers from "../page/Customers";
import OrdersRefund from "../page/OrdersRefund";
import Coupon from "../page/Coupon";
import Newsletter from "../page/Newsletter";
import FlashSale from "../page/FlashSale";
import Menu from "../page/Menu";
import CmsPages from "../page/CmsPages";
import AppSetting from "../page/AppSetting";
import StoreSetting from "../storesetting/StoreSetting";
import Faqs from "../page/Faqs";
import CmsTag from "../page/CmsTag";
import CmsContact from "../page/CmsContact";
import SeoSettings from "../storesetting/SeoSettings";
import CustomSettings from "../storesetting/CustomSetting";
import Checkout from "../storesetting/Checkout";
import ShippingLabel from "../storesetting/ShippingLabel";
import BoostSale from "../storesetting/BoostSale";
import Countdown from "../storesetting/Countdown";
import Donation from "../storesetting/Donation";
import FreeShipping from "../storesetting/FreeShipping";
import ManageDuo from "../storesetting/ManageDuo";
import Hours from "../storesetting/Hours";
import PdfVoucher from "../storesetting/PdfVoucher";
import ProductPricing from "../storesetting/ProductPricing";
import QuickCheckout from "../storesetting/QuickCheckout";
import PartialPayment from "../storesetting/PartialPayment";
import ProductCatelog from "../storesetting/ProductCatelog";
import ProductEnquiry from "../storesetting/ProductEnquiry";
import Purchase from "../storesetting/Purchase";
import RecentOrder from "../storesetting/RecentOrder";
import ReviewReminder from "../storesetting/ReviewReminder";
import SkipCart from "../storesetting/SkipCart";
import WinnerCustomer from "../storesetting/WinnerCustomer";
import SpintoWin from "../storesetting/SpintoWin";
import RewardClub from "../storesetting/RewardClub";
import CustomerReports from "../page/CustomerReports";
import TopSaleReports from "../page/TopSaleReports";
import StackReports from "../page/StackReports";
import Abandon from "../page/Abandon";
import Supportticket from "../page/Supportticket";
import Plan from "../page/Plan";

import Settings from "../page/Settings";
import EmailSetting from "../settings/EmailSetting";
import BrandSetting from "../settings/BrandSetting";
import SystemSetting from "../settings/SystemSetting";
import CurrencySetting from "../settings/CurrencySetting";
import EmailNotification from "../settings/EmailNotification";
import Shopify from "../settings/Shopify";
import WooCommercesetting from "../settings/WooCommercesetting";
import WebhookhSetting from "../settings/WebhookhSetting";
import Loyality from "../settings/Loyality";
import WhatsappSetting from "../settings/WhatsappSetting";
import WhatsappMassageSetting from "../settings/WhatsappMassageSetting";
import TwilioSettings from "../settings/TwilioSettings";
import PixelFields from "../settings/PixelFields";
import StockSetting from "../settings/StockSetting";
import TaxOption from "../settings/TaxOption";
import WhatsappBusinessApi from "../settings/WhatsappBusinessApi";
import CouponEmail from "../settings/CouponEmail";
import ManageFrequently from "../settings/ManageFrequently";
import ManageGoogle from "../settings/ManageGoogle";
import HubSpot from "../settings/HubSpot";
import ManageRecentlyViewd from "../settings/ManageRecentlyViewd";
import ManageBitBucket from "../settings/ManageBitBucket";
import FacebookSetting from "../settings/FacebookSetting";
import LinkedinSetting from "../settings/LinkedinSetting";
import ManageOutlook from "../settings/ManageOutlook";
import ManageSlack from "../settings/ManageSlack";
import ManageTwitter from "../settings/ManageTwitter";
import ManageGithub from "../settings/ManageGithub";
import StoreLocate from "../settings/StoreLocate";
import ManageTwakto from "../settings/ManageTwakto";
import ManageWizzchat from "../settings/ManageWizzchat";




const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} /> 
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="storyanalyst" element={<StoreAnalytical />} />
      

        {/* Theme / Settings */}
        <Route path="themecustomize" element={<ThemeCustomize />} />
        <Route path="storesetting" element={<AppSetting />}>
  <Route path="store-settings" element={<StoreSetting />} />
  <Route path="seo-settings" element={<SeoSettings/>}/>
  <Route path="custom-settings" element={<CustomSettings/>}/>
  <Route path="checkout-settings" element={<Checkout/>}/>
  <Route path="shipping-label" element={<ShippingLabel/>}/>
  <Route path="boost-sale-settings" element={<BoostSale/>}/>
  <Route path="count-down-timer" element={<Countdown/>}/>
  <Route path="donation-settings" element={<Donation/>}/>
  <Route path="free-shipping-popup-settings" element={<FreeShipping/>}/>
  <Route path="manage-duo2fa" element={<ManageDuo/>}/>
  <Route path="hours-settings" element={<Hours/>}/>
  <Route path="pdf-voucher-mail-settings" element={<PdfVoucher/>}/>
  <Route path="product-pricing-settings" element={<ProductPricing/>}/>
  <Route path="quick-checkout-settings" element={<QuickCheckout/>}/>
  <Route path="partial-payments-settings" element={<PartialPayment/>}/>
  <Route path="product-catelog-settings" element={<ProductCatelog/>}/>
  <Route path="product-enquiry-settings" element={<ProductEnquiry/>}/>
  <Route path="purchase-notification-settings" element={<Purchase/>}/>
  <Route path="recent-order-settings" element={<RecentOrder/>}/>
  <Route path="review-reminder-settings" element={<ReviewReminder/>}/>
  <Route path="skip-cart-setting" element={<SkipCart/>}/>
  <Route path="winner-customer-setting" element={<WinnerCustomer/>}/>
  <Route path="spin-to-win-label-settings" element={<SpintoWin/>}/>
  <Route path="reward-club-point-settings" element={<RewardClub/>}/>

  </Route>
        
        
        <Route path="setting" element={<Settings />} >
        <Route path="email-setting" element={<EmailSetting/>}/>
       <Route path="brand-settings" element={<BrandSetting/>}/>
       <Route path="system-settings" element={<SystemSetting/>}/>
       <Route path="currency-settings" element={<CurrencySetting/>}/>
       <Route path="email-notification-settings" element={<EmailNotification/>}/>
       <Route path="shopify-settings" element={<Shopify/>}/>
        <Route path="woocommerce-settings" element={<WooCommercesetting/>}/>
        <Route path="webhook-settings" element={<WebhookhSetting/>}/>
        <Route path="loyality-program-settings" element={<Loyality/>}/>
        <Route path="whatsapp-settings" element={<WhatsappSetting/>}/>
        <Route path="whatsapp-massage-settings" element={<WhatsappMassageSetting/>}/>
        <Route path="twilio-settings" element={<TwilioSettings/>}/>
        <Route path="pixel-fields-settings" element={< PixelFields/>}/>
        <Route path="stock-settings" element={<StockSetting/>}/>
        <Route path="tax-option-settings" element={<TaxOption/>}/>
        <Route path="whatsapp-business-settings" element={<WhatsappBusinessApi/>}/>
        <Route path="coupon-email-settings" element={<CouponEmail/>}/>
        <Route path="manage-frequently-product" element={<ManageFrequently/>}/>
        <Route path="manage-google-setting" element={<ManageGoogle/>}/>
        <Route path="hubspot-settings" element={<HubSpot/>}/>
        <Route path="manage-recently-settings" element={<ManageRecentlyViewd/>}/>
        <Route  path="manage-bitbucket-settings" element={<ManageBitBucket/>}/>
        <Route path="manage-facebook-settings" element={<FacebookSetting/>}/>
        <Route path="manage-linkedin-settings" element={<LinkedinSetting/>}/>
        <Route path="manage-outlook-settings" element={<ManageOutlook/>}/>
        <Route path="manage-slack-settings" element={<ManageSlack/>}/>
        <Route path="manage-twitter-settings" element={<ManageTwitter/>}/>
        <Route path="manage-github" element={<ManageGithub/>}/>
        <Route path="store-locate-settings" element={<StoreLocate/>}/>
        <Route path="manage-tawk.to" element={<ManageTwakto/>}/>
        <Route path="manage-wizzchat-settings" element={<ManageWizzchat/>}/>
        </Route>
        <Route path="sidebarcustom" element={<ComingSoon />} />
        <Route path="plan" element={<ComingSoon />} />
       

        {/* Staff */}
        <Route path="roles" element={<Roles />} />
        <Route path="users" element={<Users />} />

        
        {/* Orders */}
        <Route path="orders" element={<Order />} />
        <Route path="orderrefundrequest" element={<OrdersRefund />} />


        {/* Delivery */}
        <Route path="deliveryboy" element={<Deliveryboy />} />

        {/* Products */}
        
        <Route path="brand" element={<Brand />} />
        <Route path="label" element={<Lable />} />
        <Route path="category" element={<Category />} />
        <Route path="product" element={<Product />} />
        <Route path="attributes" element={<Attributes />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="questionanswer" element={<QA />} />

        {/* Shipping */}
     
        <Route path="shippingclass" element={<ShippingClass />} />
        <Route path="shippingzone" element={<ShippingZone />} />

        {/* Customers */}
        <Route path="customers" element={<Customers />} />

        {/* Reports */}
        <Route path="reports" element={<ComingSoon />} />
        <Route path="customerreports" element={<CustomerReports />} />
        <Route path="orderreports" element={<ComingSoon />} />
        <Route path="topsalereports" element={<TopSaleReports />} />
        <Route path="stockreports" element={<StackReports />} />

        {/* Marketing */}
      
        <Route path="coupon" element={<Coupon />} />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="flashsale" element={<FlashSale />} />
        <Route path="wishlist" element={<ComingSoon />} />
        <Route path="abandoncart" element={<Abandon />} />

        {/* Support / POS / CMS */}
        <Route path="supportticket" element={<Supportticket />} />
        <Route path="pos" element={<ComingSoon />} />
        <Route path="cms" element={<ComingSoon />} />
        <Route path="paln" element={<Plan/>}/>
        <Route path="menu" element={<Menu />} />
        <Route path="pages" element={<CmsPages />} />
        <Route path="blogsection" element={<ComingSoon />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="tag" element={<CmsTag />} />
        <Route path="contactus" element={<CmsContact />} />

       
      </Route>

      {/* Catch All */}
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  );
};

export default AppRoutes;
