# Equal-fractional leader dilution

## Summary

Equal-fractional leader dilution is the failure mode where equal coauthor shares erase unequal intellectual contribution and dilute credit for the paper's main contributors.

## Canonical Form

- Unit of analysis: coauthor team, credit-share vector, paper, author role, or fractional counting rule.
- Typical representation: equal-share prior, fractional credit assignment, leader-credit loss, or contribution-inequality caveat.
- Validation target: detect when equal fractions are too simple for actual contribution structure.
- Empirical signature: all coauthors receive the same share even when field knowledge, author order, or contribution statements indicate unequal roles.

## Uses in Science of Science

- Qualifies [credit allocation priors](../methods/credit_allocation_priors.md).
- Complements [whole-count team-credit inflation](whole_count_team_credit_inflation.md).
- Links [collective credit allocation](../measures/collective_credit_allocation.md) to contribution-aware alternatives.
- Applies to [coauthor-normalized h-index](../measures/coauthor_normalized_h_index.md) and [full/fractional citation counting](../measures/full_fractional_citation_counting.md).

## Operationalization

- Compute equal fractional credit as 1 divided by number of coauthors.
- Compare equal shares with author-order, contribution-statement, or citation-inferred credit estimates.
- Flag cases where equal fractions strongly diverge from visible leadership or contribution evidence.
- Report sensitivity of rankings to equal-fractional versus contribution-aware counting.
- Avoid treating equal fractional credit as a neutral truth when contribution inequality is likely.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) describes a second current approach that assumes all coauthors contribute equally and allocates fractional credit evenly.
- The authors state that this ignores the fact that authors' contributions are never equal.
- They argue that equal fractional allocation dilutes the credit of the intellectual leader.

## Caveats

- Equal fractional counting can be a transparent baseline when no other evidence exists.
- Contribution-aware alternatives can reproduce status, field, or citation biases.
- Leadership is field-specific and should not be inferred mechanically in all disciplines.

## Links

- [credit allocation priors](../methods/credit_allocation_priors.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [whole-count team-credit inflation](whole_count_team_credit_inflation.md)
- [coauthor-normalized h-index](../measures/coauthor_normalized_h_index.md)
- [full/fractional citation counting](../measures/full_fractional_citation_counting.md)
- [author contribution statements](../datasets/author_contribution_statements.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; SciSciNet: W2037997493; WoS: unknown]

## Metadata

- Concept ID: `equal_fractional_leader_dilution`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: equal-share credit dilution; fractional leader dilution; equal fractional credit caveat; uniform coauthor share bias
