# h-index citation-curve intersection

## Summary

h-index citation-curve intersection represents an author's publications as a descending citation curve where h is the intersection with the 45-degree reference line.

## Canonical Form

- Unit of analysis: author citation portfolio, ranked publication list, h-core boundary, or citation-count curve.
- Typical representation: rank-ordered citation curve, 45-degree line, h intersection point, and area under the curve.
- Representation target: visualize how h, total citations, and citation-tail shape relate in one author portfolio.
- Empirical signature: h occurs where the ranked citation count first falls below publication rank.

## Uses in Science of Science

- Makes the geometry of [h-index](../measures/h_index.md) visible and links it to [h-core publication set](h_core_publication_set.md).
- Connects [h-index total-citation scaling](../measures/h_index_total_citation_scaling.md) to [citation distribution scaling](../measures/citation_distribution_scaling.md), because total citations are the area under the ranked curve.
- Helps explain [h-index tail insensitivity](../validations/h_index_tail_insensitivity.md): citations far above the intersection change the area but not h.
- Provides a compact diagnostic figure for comparing broad steady impact against big-hit-dominated citation profiles.

## Operationalization

- Sort an author's publications by descending citation count at a fixed census date.
- Plot citation count against rank and add the 45-degree line where citations equal rank.
- Locate h at the largest rank whose citation count is at least that rank.
- Optionally shade the h-core square, the citation excess above h, and the non-h-core tail to separate threshold impact from total citations.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) states that total citations are the area under the ranked citation curve passing through the point where citation count equals h.
- The paper's schematic figure describes h as the intersection of the 45-degree line with the descending citation curve.
- Hirsch uses the curve geometry to motivate the lower-bound relation between total citations and `h^2` and to define a coefficient that summarizes citation-distribution shape.
- This representation clarifies why two authors with the same h can have different total citations and different highly cited tails.

## Caveats

- The curve depends on the citation database, author disambiguation, document inclusion rules, and citation census date.
- Visual intersections can hide uncertainty near h when papers have similar counts or citation data are incomplete.
- The representation describes a portfolio snapshot and does not show career timing unless repeated over time.

## Links

- [h-index](../measures/h_index.md)
- [h-core publication set](h_core_publication_set.md)
- [h-index total-citation scaling](../measures/h_index_total_citation_scaling.md)
- [h-index tail insensitivity](../validations/h_index_tail_insensitivity.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [h-index monotonicity and h-core turnover](../validations/h_index_monotonicity_turnover.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [peak-normalized citation trajectory](peak_normalized_citation_trajectory.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `h_index_citation_curve_intersection`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: h-index 45-degree intersection; ranked citation curve h point; citation-rank h curve; h-core square diagram
