# Pre/post-move citation role decomposition

## Summary

Pre/post-move citation role decomposition compares mobile researchers' normalized citation impact before and after affiliation moves to infer whether places act as producers, recruiters, cultivators, or incubators of high-impact scholars.

## Canonical Form

- Unit of analysis: mobile researcher, origin region, destination region, move spell, or country role.
- Typical representation: before-move citation score, after-arrival citation score, after-departure citation score, and role-label table.
- Mechanism or measurement target: whether a place contributes to scientific impact by sending out, attracting, developing, or later benefiting from mobile scholars.
- Empirical signature: citation impact differs depending on where citations accrue relative to a scholar's move sequence.

## Uses in Science of Science

- Provides the measurement engine behind [country mobility role typology](../measures/country_mobility_role_typology.md).
- Extends [mobile scholar citation premium](../measures/mobile_scholar_citation_premium.md) from mobile versus non-mobile comparisons to role-specific place effects.
- Connects [regional mobility net balance](../measures/regional_mobility_net_balance.md) with impact-weighted interpretation.
- Supplies a policy-relevant outcome for [mobility policy shock evaluation](../validations/mobility_policy_shock_evaluation.md).

## Operationalization

- Reconstruct each mobile researcher's affiliation sequence and country or region positions.
- Normalize citation scores by field, publication year, and document type when possible.
- Partition citations into before-departure, before-arrival, after-arrival, and after-departure windows.
- Label places as producers, recruiters, cultivators, or incubators according to where high citation scores appear relative to movement.
- Report whether the analysis counts publications, researchers, countries, or citation-weighted flows.

## Evidence and Validations

- Verified full-text evidence from Sugimoto et al. (2017) asks which countries are responsible for the production and cultivation of high-impact scholars.
- The paper operationalizes this by looking at citation scores for mobile researchers before and after their moves.
- Sugimoto et al. characterize North America and Northern Europe as strong producers and cultivators, Asian regions as strong recruiters, and Oceania as a notable incubator.
- The paper's "Trip adviser" figure separates citations accrued before leaving, before arriving, after arriving, and after leaving, making the role decomposition explicit.

## Caveats

- Citation timing can reflect field, publication age, and coauthor network composition rather than place effects alone.
- Impact accrued after a move can be influenced by work begun before the move.
- Role labels are descriptive unless paired with causal designs or policy shocks.
- Multi-affiliation and non-directional travelers complicate before/after move boundaries.

## Links

- [country mobility role typology](../measures/country_mobility_role_typology.md)
- [mobile scholar citation premium](../measures/mobile_scholar_citation_premium.md)
- [regional mobility net balance](../measures/regional_mobility_net_balance.md)
- [brain circulation networks](../representations/brain_circulation_networks.md)
- [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md)
- [mobility entry-cohort window](mobility_entry_cohort_window.md)
- [non-directional traveler affiliation pattern](../measures/non_directional_traveler_affiliation_pattern.md)

## References

- Sugimoto, C. R., Robinson-Garcia, N., Murray, D. S., Yegros-Yegros, A., Costas, R., & Lariviere, V. (2017). Scientists have most impact when they're free to move. *Nature*, 550, 29-31. https://doi.org/10.1038/550029a [OpenAlex: W2757063724; Dimensions: pub.1092034214; WoS: unknown]

## Metadata

- Concept ID: `pre_post_move_citation_role_decomposition`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Sugimoto et al. (2017) (2017)
- Latest seen paper: Sugimoto et al. (2017) (2017)
- Primary reference DOI: `10.1038/550029a`
- OpenAlex ID: `W2757063724`
- Dimensions ID: `pub.1092034214`
- SciSciNet ID: `W2757063724`
- Aliases: before-after mobility citation decomposition; Trip adviser role decomposition; producer recruiter cultivator incubator decomposition; mobility impact timing
