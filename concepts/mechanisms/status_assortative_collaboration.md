# Status-assortative collaboration

## Summary

Status-assortative collaboration is the tendency for institutions or researchers to form collaborations with partners of similar prestige or rank, especially when high-status actors increasingly connect to each other.

## Canonical Form

- Unit of analysis: institution pair, author pair, university tier, field, time period, or collaboration edge.
- Typical representation: assortativity coefficient, tier-pair mixing matrix, observed-to-expected pairing ratio, or prestige-ranked collaboration network.
- Mechanism: status signals, reputation, access, search frictions, and homophilous opportunity structures shape who becomes available or attractive as a collaborator.
- Empirical signature: same-tier collaborations occur more often than expected under random matching, and high-status/low-status collaborations occur less often than expected.

## Uses in Science of Science

- Extends [collaboration assortativity](../measures/collaboration_assortativity.md) from generic network mixing to institutional prestige.
- Provides the social-stratification mechanism inside [multi-university collaboration stratification](multi_university_collaboration.md).
- Links [institutional prestige hierarchy](institutional_prestige_hierarchy.md) to collaboration networks, not only hiring or mobility networks.
- Helps explain how rising collaboration can still concentrate high-impact science in fewer centers.

## Operationalization

- Assign institutions or researchers to ranks, tiers, or status scores.
- Build collaboration edges from coauthored papers, weighted by publication count or fractional contribution.
- Compare observed same-tier and cross-tier edge rates to a baseline that preserves tier participation or node degrees.
- Track whether status assortativity changes over time and whether it is stronger for high-impact papers.

## Evidence and Validations

- Verified full-text evidence from Jones et al. (2008) finds that tier I-tier I collaborations in science and engineering are 14% more common than expected under random matching, while tier I-tier IV collaborations are 19% less common.
- In social sciences, the same source reports a stronger pattern: tier I-tier I collaborations are 27% more common than expected and tier I-tier IV collaborations are 32% less common.
- The paper also reports that lower-tier schools reach across university boundaries but often within their own tier, indicating status matching beyond the elite tier alone.
- Jones et al. interpret the trend as a shift in which partner choice increasingly depends on who collaborators are rather than where they are.
- The over-time version of this mechanism is split out as [elite-access stratification trend](elite_access_stratification_trend.md), with [regional elite remote-partnership maps](../representations/regional_elite_remote_partnership_maps.md) showing the status-geography interaction.

## Caveats

- Status assortativity can reflect field specialization, geography, funding programs, prior training ties, or facility access rather than pure prestige preference.
- Ranking systems can induce the pattern being measured if they are based on collaborative output.
- Assortativity in collaboration does not imply equal bargaining power, credit, or intellectual contribution.
- Observed-to-expected baselines should account for opportunity sets and institution size.

## Links

- [collaboration assortativity](../measures/collaboration_assortativity.md)
- [university tier mixing matrix](../representations/university_tier_mixing_matrix.md)
- [random tier matching baseline](../validations/random_tier_matching_baseline.md)
- [multi-university collaboration stratification](multi_university_collaboration.md)
- [between-school impact premium](between_school_impact_premium.md)
- [elite-access stratification trend](elite_access_stratification_trend.md)
- [strongest-partner impact model](strongest_partner_impact_model.md)
- [regional elite remote-partnership maps](../representations/regional_elite_remote_partnership_maps.md)
- [institutional prestige hierarchy](institutional_prestige_hierarchy.md)
- [faculty prestige centrality-insularity coupling](faculty_prestige_centrality_insularity.md)
- [geographic reach-frequency decoupling](geographic_reach_frequency_decoupling.md)

## References

- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; WoS: unknown]

## Metadata

- Concept ID: `status_assortative_collaboration`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Jones et al. (2008) (2008)
- Latest seen paper: Jones et al. (2008) (2008)
- Primary reference DOI: `10.1126/science.1158357`
- OpenAlex ID: `W2096523843`
- Aliases: rank-assortative collaboration; prestige homophily in collaboration; in-group status matching; institutional status assortativity
