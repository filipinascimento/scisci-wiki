# Indirect patent-paper distance distribution

## Summary

Indirect patent-paper distance distribution measures how far connected papers and patents sit from the direct patent-paper boundary, revealing whether science-technology linkages are mostly direct or mediated through short citation paths.

## Canonical Form

- Unit of analysis: patent, paper, shortest citation path, boundary distance, field, technology class, or connected component.
- Typical representation: histogram of distance `D`, modal distance, share within a distance band, or field-specific distance profile.
- Measurement target: the depth of indirect connectivity between scientific publications and patented inventions.
- Empirical signature: many connected papers and patents lie at distances greater than 1 but within a small number of citation steps from the boundary.

## Uses in Science of Science

- Refines [science-technology distance](science_technology_distance.md) by storing the empirical distribution of distances, not only the node-level metric.
- Connects [patent-paper links](../datasets/patent_paper_links.md) to indirect paths in [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md).
- Helps separate direct science references from broader science-technology reliance.
- Provides a denominator-aware view for [science-technology lag](science_technology_lag.md), because temporal lag grows with path length.

## Operationalization

- Define distance `D=1` for patents directly citing papers and for papers directly cited by patents.
- Recursively assign connected patents and papers their minimum citation distance to the patent-paper boundary.
- Count patents and papers by distance, preserving disconnected nodes separately.
- Report mode, mean, standard deviation, and distance-band shares by domain, field, technology class, institution, or time period.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) reports that 0.759 million patents directly cited 1.41 million papers at the boundary.
- The modal connected science and engineering paper was 3 degrees from the nearest patent, while the modal connected patent was 2 degrees from the nearest paper.
- The paper reports that distances between 2 and 4 degrees captured 68% of connected patents and 79% of connected papers.
- Ahmadpoor and Jones use these distributions to show that science-technology connectivity is often indirect rather than limited to direct patent-paper citations.

## Caveats

- Shorter distance does not necessarily mean stronger causal influence.
- Distance distributions depend on citation coverage, path direction, patent-reference practices, and the included years.
- Disconnected nodes should be reported rather than silently excluded from distribution summaries.

## Links

- [science-technology distance](science_technology_distance.md)
- [science-technology lag](science_technology_lag.md)
- [science-technology majority connectivity](../mechanisms/science_technology_majority_connectivity.md)
- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]

## Metadata

- Concept ID: `indirect_patent_paper_distance_distribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: patent-paper distance histogram; indirect science-technology distance; boundary-distance distribution; citation-distance profile
