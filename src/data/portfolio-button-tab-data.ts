
type TButtonTab ={
    id:number;
    status?:string;
    idName:string;
    targetName:string;
    ariaControls:string;
    selectedName:boolean;
    tabName:string;
}
//portfolio inner page button tab data
export const tabButtonData: TButtonTab[] = [
    { id: 1, status: "active", idName: "view-tab", targetName: "#view", ariaControls: "view", selectedName: true, tabName: "View All" },
    { id: 2, idName: "brand-tab", targetName: "#brand", ariaControls: "brand", selectedName: false, tabName: "Brand" },
    { id: 3, idName: "project-tab", targetName: "#project", ariaControls: "project", selectedName: false, tabName: "Project" },
    { id: 4, idName: "digital-tab", targetName: "#digital", ariaControls: "digital", selectedName: false, tabName: "Digital Art" },
    { id: 5, idName: "creative-tab", targetName: "#creative", ariaControls: "creative", selectedName: false, tabName: "Creative" },
    { id: 6, idName: "mockup-tab", targetName: "#mockup", ariaControls: "mockup", selectedName: false, tabName: "Mockup" },
];

