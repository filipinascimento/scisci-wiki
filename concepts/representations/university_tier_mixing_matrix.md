# University tier mixing matrix

## Summary

University tier mixing matrix represents cross-institutional collaborations as a table or weighted network of institution-rank tiers, making status composition visible in collaboration data.

## Canonical Form

- Unit of analysis: two-university paper, institution pair, tier pair, field, or time period.
- Typical representation: tier-by-tier matrix, observed share table, expected share table, observed-to-expected ratio matrix, or rank-assortative collaboration network.
- Representation target: how collaboration edges are distributed across institutional status tiers.
- Empirical signature: high-tier/high-tier and low-tier/low-tier cells can be overrepresented while high-tier/low-tier cells are underrepresented.

## Uses in Science of Science

- Provides the representation layer for [status-assortative collaboration](../mechanisms/status_assortative_collaboration.md).
- Operationalizes the stratification component of [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md).
- Links [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md) to coauthorship-network edges.
- Supports validation against a [random tier matching baseline](../validations/random_tier_matching_baseline.md).

## Operationalization

- Rank universities using a documented criterion such as within-school citation output, publication output, grant volume, or an external prestige measure.
- Bin institutions into tiers, then assign each multi-university paper to a tier pair or higher-order tier set.
- Count actual tier-pair frequencies, field-year shares, and the share of collaborations involving each tier.
- Compare observed frequencies to expected frequencies under random matching, preserving each tier's overall participation share.

## Evidence and Validations

- Verified full-text evidence from Jones et al. (2008) ranks schools by citations received by within-school publications, then bins them into four tiers.
- The paper uses tier-pair tables for two-university collaborations to show actual collaboration shares above the diagonal and observed-to-expected ratios below the diagonal.
- In the 2001-2005 period, tier I schools hold places in 59.7% of science and engineering multi-university collaborations and 56.2% in social sciences.
- The same matrix structure shows that tier I-tier I collaborations are more common than expected, while tier I-tier IV collaborations are less common than expected.
- The matrix also supports temporal motifs for [elite-access stratification trend](../mechanisms/elite_access_stratification_trend.md) and impact-side motifs such as the [strongest-partner impact model](../mechanisms/strongest_partner_impact_model.md).

## Caveats

- Tier definitions can be sensitive to ranking metric, field mix, time period, and citation normalization.
- Matrix cells can compress large differences among institutions within a tier.
- Two-university simplifications may not capture large multi-institution consortia.
- Tier mixing should be interpreted with opportunity sets, geography, field specialization, and funding constraints in mind.

## Links

- [status-assortative collaboration](../mechanisms/status_assortative_collaboration.md)
- [random tier matching baseline](../validations/random_tier_matching_baseline.md)
- [elite-access stratification trend](../mechanisms/elite_access_stratification_trend.md)
- [strongest-partner impact model](../mechanisms/strongest_partner_impact_model.md)
- [regional elite remote-partnership maps](regional_elite_remote_partnership_maps.md)
- [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md)
- [between-school impact premium](../mechanisms/between_school_impact_premium.md)
- [between-school collaboration share](../measures/between_school_collaboration_share.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [collaboration assortativity](../measures/collaboration_assortativity.md)
- [coauthorship networks](coauthorship_networks.md)

## References

- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; WoS: unknown]

## Metadata

- Concept ID: `university_tier_mixing_matrix`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Jones et al. (2008) (2008)
- Latest seen paper: Jones et al. (2008) (2008)
- Primary reference DOI: `10.1126/science.1158357`
- OpenAlex ID: `W2096523843`
- Aliases: institutional tier mixing matrix; university rank pairing table; status-tier collaboration matrix; observed expected tier pairing
