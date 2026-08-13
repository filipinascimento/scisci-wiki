# Portfolio disruption aggregation fit

## Summary

Portfolio disruption aggregation fit is the method choice of matching aggregate disruption measures to the heterogeneity and purpose of the portfolio being evaluated.

## Canonical Form

- Unit of analysis: patent portfolio, university, firm, technology class, citation stream, or aggregate CD measure.
- Typical representation: average CD, impact-scaled CD, destabilizing citation totals, consolidating citation totals, or portfolio metric comparison.
- Measurement target: choose whether the aggregate should reflect typical portfolio direction, impact-weighted direction, or separate disruptive and consolidating output volumes.
- Empirical signature: different aggregate CD measures align with different portfolio structures and evaluation questions.

## Uses in Science of Science

- Refines [university patent portfolio disruption](../measures/university_patent_portfolio_disruption.md) by treating aggregation as a design choice.
- Links to [impact direction-magnitude decoupling](../validations/impact_direction_magnitude_decoupling.md), because portfolio measures can combine or separate direction and volume.
- Helps avoid [citation indicator size dependence](../measures/citation_indicator_size_dependence.md) when comparing institutions of different scale.
- Supports responsible use of disruption indicators in institutional or technology-transfer assessment.

## Operationalization

- Define the portfolio boundary and the decision question.
- Compute average CD when typical directional tendency is the target.
- Compute impact-scaled CD when large-impact patents should contribute more.
- Report destabilizing and consolidating citation totals when both directions can coexist in one portfolio.
- Compare sensitivity across the aggregation variants.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) defines multiple portfolio-level disruption indicators for universities.
- The paper notes that impact-scaled and total destabilizing/consolidating variants can be more informative than average CD for heterogeneous portfolios.
- This motif is distinct from the portfolio measure itself because it supplies the aggregation-selection rule.
- It also makes metric choice auditable when disruption is compared across organizations.

## Caveats

- Portfolio aggregation can obscure distributional tails and technology-class composition.
- Average CD can treat a small and large portfolio as comparable even when uncertainty differs sharply.
- Impact-scaled measures reintroduce citation-volume inequalities into a direction measure.

## Links

- [university patent portfolio disruption](../measures/university_patent_portfolio_disruption.md)
- [impact direction-magnitude decoupling](../validations/impact_direction_magnitude_decoupling.md)
- [citation indicator size dependence](../measures/citation_indicator_size_dependence.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [modified CD index](../measures/modified_cd_index.md)
- [disruption index](../measures/disruption_index.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; SciSciNet: W2303284028; WoS: unknown]

## Metadata

- Concept ID: `portfolio_disruption_aggregation_fit`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Funk and Owen-Smith (2017) (2017)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: aggregate CD measure selection; portfolio CD aggregation; disruption portfolio metric fit; impact-scaled disruption aggregation
