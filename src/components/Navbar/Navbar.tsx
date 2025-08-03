"use client";

import Link from "next/link";
import {
  ChevronDown,
  ShoppingCart,
  User,
  Menu,
  CircleUser,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logoImage from "@/Public/images/logo.svg";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to false
  const pathname = usePathname();

  // Function to calculate total cart quantity
  const updateCartCount = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalQuantity = cart.reduce(
        (sum: number, item: { quantity: number }) => sum + item.quantity,
        0
      );
      setCartCount(totalQuantity);
    } catch (error) {
      console.error("Error reading cart from localStorage:", error);
      setCartCount(0);
    }
  };

  // Simulate login/logout for demonstration
  const handleLogin = () => {
    setIsLoggedIn(true);
    // In a real app, this would involve API calls and setting tokens/sessions
    console.log("User logged in!");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // In a real app, this would involve clearing tokens/sessions
    console.log("User logged out!");
  };

  useEffect(() => {
    // Initial cart count
    updateCartCount();

    // Listen for storage events (cross-window updates)
    const handleStorageChange = () => {
      updateCartCount();
    };

    // Listen for custom cart update events (same-window updates)
    const handleCartUpdate = () => {
      updateCartCount();
    };

    // Handle scroll for navbar styling
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-screen z-50 text-white border-b transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-gray-700 shadow-lg"
          : "bg-[#000000] border-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-0 md:pr-4">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-[70px]" : "h-[88px]"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`font-bold transition-all duration-300 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              <div className="w-[156px] h-[41px] m-5">
                <Image
                  src={logoImage}
                  width={200}
                  height={200}
                  alt="logoImage"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors min-w-[60px] ${
                  pathname === "/"
                    ? "underline decoration-red-500 decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors min-w-[60px] ${
                  pathname === "/about-us"
                    ? "underline decoration-red-500 decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                About
              </Link>
              <div className="relative min-w-[100px]">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`text-white hover:text-gray-300 hover:bg-transparent px-3 py-2 text-sm font-medium flex items-center space-x-1 w-full justify-center ${
                        pathname.startsWith("/products")
                          ? "underline decoration-red-500 decoration-2 underline-offset-4"
                          : ""
                      }`}
                    >
                      <span>Products</span>
                      <ChevronDown className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-44 bg-[#EF1A26] backdrop-blur-md border-gray-700 text-white">
                    <DropdownMenuGroup className="space-y-1">
                      <DropdownMenuItem asChild>
                        <Link
                          href="/products"
                          className="w-full px-2 py-1.5 hover:bg-gray-800 rounded-sm"
                        >
                          Products
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/customize-product"
                          className="w-full px-2 py-1.5 hover:bg-gray-800 rounded-sm"
                        >
                          Customize Product
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/products"
                          className="w-full px-2 py-1.5 hover:bg-gray-800 rounded-sm"
                        >
                          Readymade Product
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/other-product"
                          className="w-full px-2 py-1.5 hover:bg-gray-800 rounded-sm"
                        >
                          Others Product
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Link
                href="/faq"
                className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors min-w-[60px] ${
                  pathname === "/faq"
                    ? "underline decoration-red-500 decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                FAQ
              </Link>
              <Link
                href="/contact-us"
                className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors min-w-[60px] ${
                  pathname === "/contact"
                    ? "underline decoration-red-500 decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/cart"
              className="text-white hover:text-gray-300 transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="text-white hover:bg-gray-800">
                    {/* <User className="h-6 w-6" /> */}
                    <CircleUser className="h-7 w-7" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-black/95 backdrop-blur-md border-gray-700 text-white">
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                      <Link href="/account" className="w-full">
                        Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="hover:bg-gray-800 focus:bg-gray-800"
                      onClick={handleLogout}
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="ghost"
                className="text-white hover:text-gray-300"
                onClick={handleLogin}
              >
                Login
              </Button>
            )}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-gray-800"
                >
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-black/95 backdrop-blur-md text-white border-gray-700"
              >
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link
                    href="/"
                    className={`font-bold transition-all duration-300 ${
                      isScrolled ? "text-xl" : "text-2xl"
                    }`}
                  >
                    <div className="w-[156px] h-[41px] m-5">
                      <Image
                        src={logoImage}
                        width={200}
                        height={200}
                        alt="logoImage"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className={`text-white hover:text-gray-300 py-2 text-lg font-medium transition-colors ${
                      pathname === "/"
                        ? "underline decoration-red-500 decoration-2 underline-offset-4"
                        : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={`text-white hover:text-gray-300 py-2 text-lg font-medium transition-colors ${
                      pathname === "/about"
                        ? "underline decoration-red-500 decoration-2 underline-offset-4"
                        : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <div className="py-2">
                    <div
                      className={`text-white text-lg font-medium mb-2 ${
                        pathname.startsWith("/products")
                          ? "underline decoration-red-500 decoration-2 underline-offset-4"
                          : ""
                      }`}
                    >
                      Products
                    </div>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/products/category1"
                        className={`block text-gray-300 hover:text-white transition-colors ${
                          pathname === "/products/category1"
                            ? "underline decoration-red-500 decoration-2 underline-offset-4"
                            : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        Category 1
                      </Link>
                      <Link
                        href="/products/category2"
                        className={`block text-gray-300 hover:text-white transition-colors ${
                          pathname === "/products/category2"
                            ? "underline decoration-red-500 decoration-2 underline-offset-4"
                            : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        Category 2
                      </Link>
                      <Link
                        href="/products/category3"
                        className={`block text-gray-300 hover:text-white transition-colors ${
                          pathname === "/products/category3"
                            ? "underline decoration-red-500 decoration-2 underline-offset-4"
                            : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        Category 3
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/faq"
                    className={`text-white hover:text-gray-300 py-2 text-lg font-medium transition-colors ${
                      pathname === "/faq"
                        ? "underline decoration-red-500 decoration-2 underline-offset-4"
                        : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/contact-us"
                    className={`text-white hover:text-gray-300 py-2 text-lg font-medium transition-colors ${
                      pathname === "/contact"
                        ? "underline decoration-red-500 decoration-2 underline-offset-4"
                        : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="flex items-center space-x-6 pt-6 border-t border-gray-800">
                    <Link
                      href="/cart"
                      className="text-white hover:text-gray-300 transition-colors relative"
                      onClick={() => setIsOpen(false)}
                    >
                      <ShoppingCart className="h-7 w-7" />
                      {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {cartCount}
                        </span>
                      )}
                    </Link>
                    {isLoggedIn ? (
                      <>
                        <Link
                          href="/account"
                          className={`text-white hover:text-gray-300 transition-colors ${
                            pathname === "/account"
                              ? "underline decoration-red-500 decoration-2 underline-offset-4"
                              : ""
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <User className="h-7 w-7" />
                        </Link>
                        <Button
                          variant="ghost"
                          className="text-white hover:text-gray-300 py-2 text-lg font-medium transition-colors justify-start pl-0"
                          onClick={() => {
                            handleLogout();
                            setIsOpen(false);
                          }}
                        >
                          Logout
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="ghost"
                        className="text-white hover:text-gray-300 py-2 text-lg font-medium transition-colors justify-start pl-0"
                        onClick={() => {
                          handleLogin();
                          setIsOpen(false);
                        }}
                      >
                        Login
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
