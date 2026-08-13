# Other-discipline reference ratio

## Summary

The other-discipline reference ratio measures the share of a paper's references that have no Web of Science subject category in common with the focal paper.

## Canonical Form

- Unit of analysis: focal paper, reference, focal subject category, or cited subject category.
- Typical representation: scalar ratio from 0 to 1.
- Measurement target: how much a paper borrows knowledge from outside its own assigned disciplinary categories.
- Empirical signature: the ratio increases when a larger share of references point to categories not shared with the focal paper.

## Uses in Science of Science

- Gives a direct borrowing-from-other-fields measure for [interdisciplinarity](../mechanisms/interdisciplinarity.md).
- Complements [category variety](category_variety.md) by distinguishing new categories from categories already shared with the focal paper.
- Uses [cited subject-category reference profiles](../representations/cited_subject_category_reference_profile.md) plus the focal paper's own category assignments.
- Helps separate within-field breadth from cross-field borrowing.

## Operationalization

- Assign the focal paper to one or more Web of Science subject categories.
- Assign each cited reference or cited journal to one or more Web of Science subject categories.
- Mark a reference as other-discipline when none of its subject categories overlaps with the focal paper's subject categories.
- Divide the count or weight of other-discipline references by the total reference count.
- Report how multi-category journals are handled because overlap rules can change the denominator and numerator.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) includes the ratio of references to other subject categories as one of the paper-level interdisciplinarity indicators.
- The paper defines the indicator as the ratio of references that have no common subject categories with the focal paper.
- Wang et al. use the measure as an established way to capture borrowing knowledge from other disciplines.
- In their descriptive data, the mean other-discipline reference ratio is 0.49 across the analyzed Web of Science article cohort.

## Caveats

- The measure depends on the focal paper's own category assignment and can be unstable for multidisciplinary journals.
- It treats all outside categories similarly, so it does not measure how distant the outside disciplines are.
- A high ratio can reflect indexing choices or broad journal categories rather than substantive knowledge integration.

## Links

- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [cited subject-category reference profile](../representations/cited_subject_category_reference_profile.md)
- [Web of Science](../datasets/web_of_science.md)
- [field classifications](field_classifications.md)
- [category variety](category_variety.md)
- [distributional balance](distributional_balance.md)
- [category disparity](category_disparity.md)
- [Rao-Stirling diversity](rao_stirling_diversity.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `other_discipline_reference_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Lariviere and Gingras (2010) (2010)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: ratio of other-discipline references; ratio oth-disc refs; outside-field reference share; cross-disciplinary reference ratio
