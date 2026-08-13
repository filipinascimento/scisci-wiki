# Placement residual contingency portfolio

## Summary

Placement residual contingency portfolio is the validation motif that collects nonprestige factors left unexplained after faculty prestige rank predicts placement.

## Canonical Form

- Unit of analysis: faculty placement, candidate, department search, field-year labor market, or prediction residual.
- Typical representation: residual-factor checklist, omitted-variable portfolio, exception audit, or post-prediction qualitative follow-up.
- Validation target: keep prestige hierarchy predictive without treating it as deterministic or complete.
- Empirical signature: prestige-derived ranks predict placements better than alternatives, but modest AUC leaves substantial unexplained variance.

## Uses in Science of Science

- Refines [faculty placement predictive validity](faculty_placement_predictive_validity.md) by naming the residual space.
- Links [upward faculty placement exception audit](upward_faculty_placement_exception_audit.md) to candidate and department-level data needs.
- Prevents [faculty prestige-merit conflation](faculty_prestige_merit_conflation.md) by preserving unobserved ability, preferences, timing, and local demand.
- Helps design richer faculty-market datasets with candidate, search, mentoring, and resource variables.

## Operationalization

- Fit a placement-prediction model using institutional prestige or placement-derived ranks.
- Identify residuals where placements are poorly predicted or move against the prestige gradient.
- Code candidate-level and department-level contingencies such as subfield needs, search timing, geography, preferences, mentoring, resources, publications, and local hiring constraints.
- Report whether residual factors are random, field-specific, or systematically associated with demographic or institutional groups.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2015) reports that prestige hierarchies are the most accurate single predictors of faculty placement across the studied disciplines.
- The same passage emphasizes that AUC below 0.7 implies substantial roles for other factors.
- Later, the paper identifies unusually successful institutions and faculty who place above doctoral rank as puzzles requiring detailed data on research, mentoring, institutional resources, and other factors not present in the study.

## Caveats

- Residual-factor portfolios can become speculative unless tied to observed data.
- Some residuals may reflect measurement error in prestige rank or field boundaries rather than true omitted mechanisms.
- Adding many candidate variables can create privacy and fairness risks in predictive hiring analyses.

## Links

- [faculty placement predictive validity](faculty_placement_predictive_validity.md)
- [upward faculty placement exception audit](upward_faculty_placement_exception_audit.md)
- [faculty prestige-merit conflation](faculty_prestige_merit_conflation.md)
- [faculty hiring null models](../methods/faculty_hiring_null_models.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [gendered faculty placement gap](../mechanisms/gendered_faculty_placement_gap.md)

## References

- Clauset, A., Arbesman, S., & Larremore, D. B. (2015). Systematic inequality and hierarchy in faculty hiring networks. *Science Advances*, 1(1), e1400005. https://doi.org/10.1126/sciadv.1400005 [OpenAlex: W2102017123; Dimensions: pub.1028625291; SciSciNet: W2102017123; WoS: unknown]

## Metadata

- Concept ID: `placement_residual_contingency_portfolio`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2015) (2015)
- Latest seen paper: Clauset et al. (2015) (2015)
- Primary reference DOI: `10.1126/sciadv.1400005`
- OpenAlex ID: `W2102017123`
- Dimensions ID: `pub.1028625291`
- SciSciNet ID: `W2102017123`
- Aliases: faculty placement residual factors; nonprestige placement contingencies; hiring residual portfolio; placement omitted-variable audit
