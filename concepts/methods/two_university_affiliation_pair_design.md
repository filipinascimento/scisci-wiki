# Two-University Affiliation Pair Design

## Summary

Two-university affiliation pair design restricts cross-institutional collaboration analysis to papers with exactly two university affiliations so institutional tier pairings can be interpreted cleanly.

## Canonical Form

- Unit of analysis: paper with two university affiliations, institution pair, tier pair, field-year, or collaboration edge.
- Typical representation: pairwise institution or tier table.
- Method target: make status mixing and pairwise impact comparisons tractable.
- Empirical signature: the restricted sample covers most multi-university papers while avoiding ambiguity from higher-order consortia.

## Uses in Science of Science

- Provides a design choice for [university tier mixing matrix](../representations/university_tier_mixing_matrix.md).
- Clarifies the denominator behind [random tier matching baseline](../validations/random_tier_matching_baseline.md).
- Distinguishes pairwise tier inference from the broader [authorship structure taxonomy](../measures/authorship_structure_taxonomy.md).

## Operationalization

- Resolve author affiliations to institutions.
- Keep between-school papers with exactly two university affiliations.
- Map the two institutions to rank tiers and form a tier-pair observation.
- Compare pairwise results with all multi-university papers to assess coverage loss.

## Evidence and Validations

- Verified full-text evidence from Jones et al. (2008) focuses impact analyses on between-school collaborations with two university affiliations.
- The paper explains that two-university collaborations allow explicit tier-pair classification.
- Its notes state that two-university collaborations represent over 90% of multi-university collaborations.

## Caveats

- The design downweights large consortia and multi-site teams.
- Two-affiliation records can still hide multiple departments, campuses, or nonuniversity collaborators.
- Pairwise clarity comes at the cost of excluding some complex team structures.

## Links

- [authorship structure taxonomy](../measures/authorship_structure_taxonomy.md)
- [university tier mixing matrix](../representations/university_tier_mixing_matrix.md)
- [major U.S. university WoS panel](../datasets/major_us_university_wos_panel.md)
- [random tier matching baseline](../validations/random_tier_matching_baseline.md)
- [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md)

## References

- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; SciSciNet: W2096523843; WoS: unknown]

## Metadata

- Concept ID: `two_university_affiliation_pair_design`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Jones et al. (2008) (2008)
- Latest seen paper: Jones et al. (2008) (2008)
- Primary reference DOI: `10.1126/science.1158357`
- OpenAlex ID: `W2096523843`
- Dimensions ID: `pub.1062457759`
- SciSciNet ID: `W2096523843`
- Aliases: two-school pair design; two-affiliation collaboration restriction; pairwise university collaboration design; tier-pair sample restriction
