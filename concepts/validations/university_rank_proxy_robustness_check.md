# University Rank-Proxy Robustness Check

## Summary

University rank-proxy robustness check tests whether collaboration-stratification findings survive alternative institutional prestige definitions.

## Canonical Form

- Unit of analysis: institution, ranking method, tier, collaboration pair, or field-period panel.
- Typical representation: repeated tier assignments under total citations, average citation impact, h-index, or other prestige proxies.
- Validation target: sensitivity of institutional collaboration conclusions to rank construction.
- Empirical signature: tier-mixing and impact patterns remain qualitatively stable across rank proxies.

## Uses in Science of Science

- Validates [elite-access stratification trend](../mechanisms/elite_access_stratification_trend.md).
- Checks whether [university tier mixing matrix](../representations/university_tier_mixing_matrix.md) conclusions are artifacts of one rank definition.
- Connects institutional ranking to [h-index](../measures/h_index.md) and other citation-based status measures.

## Operationalization

- Construct several institution rankings from independent or documented criteria.
- Re-bin institutions into tiers under each rank proxy.
- Recompute tier-pair frequencies, observed-to-expected ratios, and impact premiums.
- Report which conclusions depend on the rank proxy.

## Evidence and Validations

- Verified full-text evidence from Jones et al. (2008) reports that alternative school-ranking methods were considered.
- The paper notes that patterns of impact and stratification are consistent under total citations, average citation impact, and university h-index variants.
- This supports treating the observed stratification as more than an artifact of one prestige proxy.

## Caveats

- Similar citation-based proxies may share the same biases.
- Rank stability can hide instability near tier cutoffs.
- Rankings based on broad institutional output can miss department-level or field-specific prestige.

## Links

- [within-school rank exogeneity design](../methods/within_school_rank_exogeneity_design.md)
- [institution citation-rank proxy](../measures/institution_citation_rank_proxy.md)
- [h-index](../measures/h_index.md)
- [elite-access stratification trend](../mechanisms/elite_access_stratification_trend.md)
- [university tier mixing matrix](../representations/university_tier_mixing_matrix.md)

## References

- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; SciSciNet: W2096523843; WoS: unknown]

## Metadata

- Concept ID: `university_rank_proxy_robustness_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Jones et al. (2008) (2008)
- Latest seen paper: Jones et al. (2008) (2008)
- Primary reference DOI: `10.1126/science.1158357`
- OpenAlex ID: `W2096523843`
- Dimensions ID: `pub.1062457759`
- SciSciNet ID: `W2096523843`
- Aliases: institutional rank sensitivity check; university prestige proxy robustness; tier definition robustness; rank-method collaboration audit
