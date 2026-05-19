"use client";

import * as React from "react";
import { notFound, useParams } from "next/navigation";
import { Bell, Check, ChevronRight, Plus, Settings } from "lucide-react";

import { PageHeader } from "../../_components/page-header";
import { DemoSection } from "../../_components/demo-section";
import {
  DESIGN_SYSTEM_COMPONENT_LABEL_BY_SLUG,
  DESIGN_SYSTEM_COMPONENT_SLUGS,
} from "../../../nav-config";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type DemoComponent = () => React.ReactElement;

const DEMOS: Record<string, DemoComponent> = {
  badge: () => (
    <div className="flex flex-col gap-6">
      <DemoSection
        title="Variants"
        code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
      >
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </DemoSection>
      <DemoSection
        title="With icon"
        code={`<Badge variant="secondary">
  <Check className="size-3" />
  Verified
</Badge>`}
      >
        <Badge variant="secondary">
          <Check className="size-3" />
          Verified
        </Badge>
      </DemoSection>
    </div>
  ),

  button: () => (
    <div className="flex flex-col gap-6">
      <DemoSection
        title="Variants"
        code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}
      >
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<Button size="xs">XS</Button>
<Button size="sm">SM</Button>
<Button size="default">Default</Button>
<Button size="lg">LG</Button>`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="default">Default</Button>
          <Button size="lg">LG</Button>
        </div>
      </DemoSection>

      <DemoSection
        title="With icon"
        code={`<Button>
  <Plus className="size-4" />
  New item
</Button>`}
      >
        <Button>
          <Plus className="size-4" />
          New item
        </Button>
      </DemoSection>

      <DemoSection
        title="Disabled"
        code={`<Button disabled>Disabled</Button>`}
      >
        <Button disabled>Disabled</Button>
      </DemoSection>
    </div>
  ),

  card: () => (
    <DemoSection
      code={`<Card>
  <CardHeader>
    <CardTitle>Card title</CardTitle>
    <CardDescription>A short description of the card.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>`}
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Card title</CardTitle>
          <CardDescription>A short description of the card.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Card content goes here.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>
    </DemoSection>
  ),

  dialog: () => (
    <DemoSection
      code={`<Dialog>
  <DialogTrigger render={<Button variant="outline">Open dialog</Button>} />
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Update your name. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" defaultValue="Pedro Duarte" />
    </div>
    <DialogFooter>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
    >
      <Dialog>
        <DialogTrigger render={<Button variant="outline">Open dialog</Button>} />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Update your name. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <DialogFooter>
            <Button>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DemoSection>
  ),

  "dropdown-menu": () => (
    <DemoSection
      code={`<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline">Open menu</Button>} />
  <DropdownMenuContent align="start">
    <DropdownMenuGroup>
      <DropdownMenuLabel>My account</DropdownMenuLabel>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
    >
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline">Open menu</Button>}
        />
        <DropdownMenuContent align="start">
          <DropdownMenuGroup>
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </DemoSection>
  ),

  input: () => (
    <div className="flex flex-col gap-6">
      <DemoSection
        title="With label"
        code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
      >
        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
      </DemoSection>

      <DemoSection
        title="Disabled"
        code={`<Input disabled placeholder="Disabled" />`}
      >
        <Input disabled placeholder="Disabled" className="max-w-sm" />
      </DemoSection>
    </div>
  ),

  popover: () => (
    <DemoSection
      code={`<Popover>
  <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
  <PopoverContent align="start" className="w-72 space-y-2 p-4">
    <h4 className="text-sm font-medium">Dimensions</h4>
    <p className="text-xs text-muted-foreground">
      Set the width and height for the layer.
    </p>
  </PopoverContent>
</Popover>`}
    >
      <Popover>
        <PopoverTrigger
          render={<Button variant="outline">Open popover</Button>}
        />
        <PopoverContent align="start" className="w-72 space-y-2 p-4">
          <h4 className="text-sm font-medium">Dimensions</h4>
          <p className="text-xs text-muted-foreground">
            Set the width and height for the layer.
          </p>
        </PopoverContent>
      </Popover>
    </DemoSection>
  ),

  select: () => (
    <DemoSection
      code={`<Select defaultValue="apple">
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Pick a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
    >
      <Select defaultValue="apple">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Pick a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </DemoSection>
  ),

  separator: () => (
    <DemoSection
      code={`<Separator />
<Separator orientation="vertical" className="h-6" />`}
    >
      <div className="flex w-full max-w-sm flex-col gap-4">
        <div className="space-y-1">
          <p className="text-sm font-medium">Account</p>
          <p className="text-xs text-muted-foreground">Manage your account.</p>
        </div>
        <Separator />
        <div className="flex items-center gap-3 text-sm">
          <span>Profile</span>
          <Separator orientation="vertical" className="!h-4" />
          <span>Billing</span>
          <Separator orientation="vertical" className="!h-4" />
          <span>Team</span>
        </div>
      </div>
    </DemoSection>
  ),

  switch: () => {
    function SwitchDemo() {
      const [checked, setChecked] = React.useState(true);
      return (
        <div className="flex items-center gap-3">
          <Switch checked={checked} onCheckedChange={setChecked} id="notify" />
          <Label htmlFor="notify" className="flex items-center gap-1.5">
            <Bell className="size-4" />
            Notifications
          </Label>
        </div>
      );
    }
    return (
      <DemoSection
        code={`<Switch checked={checked} onCheckedChange={setChecked} />`}
      >
        <SwitchDemo />
      </DemoSection>
    );
  },

  tabs: () => (
    <DemoSection
      code={`<Tabs defaultValue="account" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings.</TabsContent>
  <TabsContent value="password">Password settings.</TabsContent>
</Tabs>`}
    >
      <Tabs defaultValue="account" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="pt-4">
          <p className="text-sm text-muted-foreground">
            Make changes to your account here.
          </p>
        </TabsContent>
        <TabsContent value="password" className="pt-4">
          <p className="text-sm text-muted-foreground">
            Change your password here.
          </p>
        </TabsContent>
      </Tabs>
    </DemoSection>
  ),

  tooltip: () => (
    <DemoSection
      code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
    <TooltipContent>Helpful hint.</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
    >
      <TooltipProvider>
        <div className="flex flex-wrap gap-3">
          <Tooltip>
            <TooltipTrigger
              render={<Button variant="outline">Hover me</Button>}
            />
            <TooltipContent>Helpful hint.</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Settings">
                  <Settings className="size-4" />
                </Button>
              }
            />
            <TooltipContent side="bottom">Settings</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Next">
                  <ChevronRight className="size-4" />
                </Button>
              }
            />
            <TooltipContent side="right">Next step</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </DemoSection>
  ),
};

export default function ComponentPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  if (!slug || !DESIGN_SYSTEM_COMPONENT_SLUGS.includes(slug)) {
    notFound();
  }

  const label = DESIGN_SYSTEM_COMPONENT_LABEL_BY_SLUG[slug];
  const Demo = DEMOS[slug];

  return (
    <div>
      <PageHeader title={label} />
      {Demo ? (
        <Demo />
      ) : (
        <p className="text-sm text-muted-foreground">
          No demo for <code>{slug}</code> yet.
        </p>
      )}
    </div>
  );
}
