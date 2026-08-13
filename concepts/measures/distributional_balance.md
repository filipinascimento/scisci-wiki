# Distributional balance

## Summary

Distributional balance measures how evenly items are apportioned across represented categories.

## Canonical Form

- Unit of analysis: paper, reference list, portfolio, funding mix, team output, field, or map overlay.
- Typical representation: evenness score, concentration complement, Gini complement, Shannon entropy, or Simpson/Gini-Simpson index.
- Mechanism or measurement target: whether category shares are dominated by one core category or spread evenly.
- Empirical signature: balance increases when category shares become more even, holding category count and category distances aside.

## Uses in Science of Science

- Separates evenness from [category variety](category_variety.md) and [category disparity](category_disparity.md).
- Helps distinguish a paper with one disciplinary core plus borrowed knowledge from a paper drawing evenly on multiple fields.
- Provides a component for [Rao-Stirling diversity](rao_stirling_diversity.md), interdisciplinarity measures, and portfolio-diversity audits.

## Operationalization

- Assign items to categories and compute category shares.
- Apply an evenness or concentration measure such as 1-Gini, [Shannon entropy diversity](shannon_entropy_diversity.md), or [Simpson diversity index](simpson_diversity_index.md).
- Interpret higher balance as more even category representation.
- Report the category system and whether longer reference lists or larger portfolios were controlled.

## Evidence and Validations

- Verified full-text evidence from Stirling (2007) defines balance as the apportionment pattern of elements across categories.
- Porter and Rafols (2009) use the distribution of citations among Web of Science subject categories as one visible dimension of disciplinary diversity in science maps.
- Wang, Thijs, and Glanzel (2015) treat 1-Gini as a balance-oriented interdisciplinarity measure and recover a distinct balance factor.
- Wang et al. find a negative association between the extracted balance factor and long-term citations, while noting that the mechanism may involve integration difficulty or evaluation bias against balanced interdisciplinary work.
- This result is split into [balanced interdisciplinarity penalty](../mechanisms/balanced_interdisciplinarity_penalty.md) because the citation penalty has competing mechanism interpretations.

## Caveats

- Balance is ambiguous: even representation can mean deep integration, lack of disciplinary grounding, or diffuse referencing.
- Balance scores depend on category granularity and assignment rules.
- A balanced spread across nearby categories can be less cognitively diverse than an unbalanced spread containing a distant category.

## Links

- [diversity measures](diversity_measures.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [category variety](category_variety.md)
- [category disparity](category_disparity.md)
- [Simpson diversity index](simpson_diversity_index.md)
- [Shannon entropy diversity](shannon_entropy_diversity.md)
- [Rao-Stirling diversity](rao_stirling_diversity.md)
- [diversity proxy-substitution risk](../validations/diversity_proxy_substitution_risk.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [science map overlays](../representations/science_map_overlays.md)
- [balanced interdisciplinarity penalty](../mechanisms/balanced_interdisciplinarity_penalty.md)
- [nonlinear interdisciplinarity impact gradients](../validations/nonlinear_interdisciplinarity_impact_gradients.md)
- [responsible metrics](responsible_metrics.md)

## References

- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]
- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]
- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `distributional_balance`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Stirling (2007) (2007)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1098/rsif.2007.0213`
- OpenAlex ID: `W2110158660`
- Aliases: category evenness; disciplinary balance; 1-Gini balance; reference distribution balance
