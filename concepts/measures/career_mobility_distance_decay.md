# Career mobility distance decay

## Summary

Career mobility distance decay measures how the probability of an institutional move decreases with the geographic distance between origin and destination.

## Canonical Form

- Unit of analysis: career move, origin institution, destination institution, city pair, or geodesic distance.
- Typical representation: probability distribution `P(Dd)` or distance-decay curve over move distances.
- Measurement target: the spatial friction in scientific career mobility.
- Empirical signature: shorter-distance moves are more frequent, while long-distance moves form a heavy-tailed distribution.

## Uses in Science of Science

- Extends [geographic collaboration distance](geographic_collaboration_distance.md) from collaboration and citation flows to career moves.
- Provides a spatial layer for [scientific mobility](../mechanisms/scientific_mobility.md) and [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md).
- Helps compare scientific career moves with general human mobility, international mobility, and city-level collaboration networks.
- Supports tests of whether collaboration ties, field specialization, or institution rank increase long-range career moves.

## Operationalization

- Geocode origin and destination institutions for each inferred career move.
- Compute geographic distance, usually as geodesic distance between institutional locations or cities.
- Estimate the move-distance distribution and compare it with a null model or general human-mobility exponent.
- Stratify by career stage, rank transition, country boundary, field, and cohort when sample size allows.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) measures the distribution of geographical distances `Dd` over all observed institutional moves.
- The paper reports that the probability of moving farther decays as a power law, with short-distance moves dominating scientific career choices.
- Deville et al. estimate a career-move distance exponent of about 0.65, smaller than typical human travel exponents around 2, indicating a comparatively higher likelihood of long-range scientific moves.
- The paper suggests that scientific collaborations may help explain the long-range tail because city-level collaboration networks show similarly low exponents.

## Caveats

- Distance can proxy for national borders, language, visa rules, family constraints, funding systems, and institution rank.
- Geocoding errors and multi-campus institutions can distort short-distance moves.
- International moves and domestic long-distance moves may have different mechanisms even at similar distances.

## Links

- [geographic collaboration distance](geographic_collaboration_distance.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [collaboration-mediated long-range mobility](../mechanisms/collaboration_mediated_long_range_mobility.md)
- [postdoctoral mobility rite of passage](../mechanisms/postdoctoral_mobility_rite_of_passage.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [geocoded affiliation extraction](../methods/geocoded_affiliation_extraction.md)
- [world city collaboration network](../representations/world_city_collaboration_network.md)
- [career move timing distribution](career_move_timing_distribution.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [mobility generalization boundary](../validations/mobility_generalization_boundary.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]

## Metadata

- Concept ID: `career_mobility_distance_decay`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: career move distance distribution; mobility distance decay; P(Dd) career movement; scientific relocation distance
