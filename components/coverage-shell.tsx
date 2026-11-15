type CoverageShellProps = {
  children: React.ReactNode;
};

/**
 * CoverageShell — shared opt-in wrapper for the 27 insurance interiors.
 * Applies the Coverage Decision Aid reading scope (.ins-interior: fog
 * #F2F4F6 + ink #1E2732 + humanist sans) without touching copy, links,
 * metadata, AdSlot positions, or GuideSchema. Dark estimator islands
 * ([aria-label*="estimator"] .glass-card roots) are explicitly exempted
 * from the fog treatment in globals.css. No photo, no new deps.
 */
export function CoverageShell({ children }: CoverageShellProps) {
  return <div className="ins-interior">{children}</div>;
}

export default CoverageShell;
