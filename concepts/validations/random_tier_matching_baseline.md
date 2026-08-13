# Random tier matching baseline

## Summary

Random tier matching baseline tests whether observed collaboration between university tiers differs from the pairing frequencies expected if partners matched randomly given each tier's overall participation.

## Canonical Form

- Unit of analysis: tier pair, multi-university paper, institution pair, field, or period.
- Typical representation: expected tier-pair matrix, observed-to-expected ratio, bootstrap significance test, or assortativity null.
- Validation target: whether apparent stratification exceeds what would be expected from the marginal prevalence of each tier in collaborations.
- Empirical signature: observed-to-expected ratios above 1 for same-tier pairs and below 1 for distant cross-tier pairs.

## Uses in Science of Science

- Validates [status-assortative collaboration](../mechanisms/status_assortative_collaboration.md) against a simple opportunity baseline.
- Complements [collaboration assortativity](../measures/collaboration_assortativity.md) and [university tier mixing matrices](../representations/university_tier_mixing_matrix.md).
- Helps distinguish elite dominance in collaboration volume from pair-specific preference or exclusion.
- Provides a reusable null model for prestige-tier collaboration, hiring, mobility, and grant co-participation networks.

## Operationalization

- Estimate each tier's participation share among multi-university papers.
- For a two-tier pair `j,k`, compute the expected pair probability as `2 Pj Pk` when `j` differs from `k` and `Pj Pk` when `j` equals `k`.
- Divide observed pair frequency by expected frequency to obtain an observed-to-expected ratio.
- Use bootstrapping, permutation, or degree-preserving variants to test whether deviations are statistically stable.

## Evidence and Validations

- Verified full-text evidence from Jones et al. (2008) defines a random-matching baseline for university-tier pairings among two-school collaborations.
- The paper reports observed-to-expected ratios below the diagonal of its tier-pairing table and uses bootstrapping for statistical significance.
- This baseline supports the finding that tier I-tier I collaborations are more common than expected and tier I-tier IV collaborations less common than expected.
- The same validation separates overall elite participation from the more specific claim that elite institutions increasingly match with one another.
- Over-time application of the same baseline supports the [elite-access stratification trend](../mechanisms/elite_access_stratification_trend.md).

## Caveats

- The simple baseline preserves tier participation shares but not institution size, field specialization, geography, prior ties, or degree heterogeneity.
- Pair probabilities are easiest to define for two-institution papers and need adaptation for larger teams.
- Tier assignment can be endogenous if it is based on the same collaborative outputs being evaluated.
- More restrictive nulls may be required when testing causal exclusion or partner preference.

## Links

- [status-assortative collaboration](../mechanisms/status_assortative_collaboration.md)
- [university tier mixing matrix](../representations/university_tier_mixing_matrix.md)
- [elite-access stratification trend](../mechanisms/elite_access_stratification_trend.md)
- [collaboration assortativity](../measures/collaboration_assortativity.md)
- [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [faculty placement predictive validity](faculty_placement_predictive_validity.md)
- [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md)

## References

- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; WoS: unknown]

## Metadata

- Concept ID: `random_tier_matching_baseline`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Jones et al. (2008) (2008)
- Latest seen paper: Jones et al. (2008) (2008)
- Primary reference DOI: `10.1126/science.1158357`
- OpenAlex ID: `W2096523843`
- Aliases: random university-tier matching; tier-pair null model; observed expected tier baseline; collaboration status null
