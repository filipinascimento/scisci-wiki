# Geocoded Affiliation Name Resolution

## Summary

Geocoded affiliation name resolution resolves noisy affiliation strings into institutions by combining geographic information, name similarity, and disambiguated-author context.

## Canonical Form

- Unit of analysis: affiliation string, institution, author-affiliation link, or mobility trajectory.
- Typical representation: institution-name disambiguation workflow.
- Mechanism or measurement target: converting publication-address strings into stable institutional entities.
- Empirical signature: many raw affiliation-name variants collapse into a smaller set of institutions.

## Uses in Science of Science

- Supports [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md).
- Extends [institution name-variant normalization](institution_name_variant_normalization.md) with geocoded evidence.
- Connects to [geocoded affiliation extraction](geocoded_affiliation_extraction.md).
- Stabilizes [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md) before mobility analysis.

## Operationalization

- Extract raw affiliation strings from publication records.
- Use geocodes, string similarity, and author context to group variants.
- Assign stable institution identifiers or names.
- Report the number of raw strings and resolved institutions.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) reports 319,829 different affiliation names in the APS data.
- The paper's affiliation-disambiguation procedure uses geocoded information and similarity between affiliation names.
- The disambiguated author set also plays a role, and the procedure identifies 4,052 distinct institutions.

## Caveats

- Geocodes can merge nearby but distinct institutions or split multi-campus systems.
- Author context can propagate author-disambiguation errors into affiliation resolution.
- Institution resolution rules should be documented before comparing mobility across ranks or places.

## Links

- [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md)
- [institution name-variant normalization](institution_name_variant_normalization.md)
- [geocoded affiliation extraction](geocoded_affiliation_extraction.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; SciSciNet: W2049213211; WoS: unknown]

## Metadata

- Concept ID: `geocoded_affiliation_name_resolution`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: geocoded institution disambiguation; affiliation geocode resolution; institution string geocoding; affiliation-name similarity resolution
