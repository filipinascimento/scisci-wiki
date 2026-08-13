# Whole-count team-credit inflation

## Summary

Whole-count team-credit inflation is the failure mode where every coauthor receives full credit for a paper, inflating apparent impact for researchers in large teams or collaboration-heavy fields.

## Canonical Form

- Unit of analysis: author-paper pair, coauthor team, evaluation record, citation count, or credit-counting rule.
- Typical representation: full-count credit assignment, inflated author score, team-size sensitivity check, or counting-rule caveat.
- Validation target: detect when full counting turns team output into duplicated individual impact.
- Empirical signature: large-team papers contribute full paper or citation credit to every author, multiplying the credited output beyond the paper count.

## Uses in Science of Science

- Provides a guardrail for [collective credit allocation](../measures/collective_credit_allocation.md).
- Contrasts with [credit allocation priors](../methods/credit_allocation_priors.md) and fractional alternatives.
- Links to [team-output full-credit inflation](team_output_full_credit_inflation.md) and [full/fractional citation counting](../measures/full_fractional_citation_counting.md).
- Helps evaluate researchers in large-team domains such as genomics, particle physics, and clinical collaborations.

## Operationalization

- Identify whether a metric assigns each coauthor the full paper or citation count.
- Compare full counting with fractional, author-order, contribution-statement, or inferred-credit alternatives.
- Report sensitivity by team size, field, and collaboration intensity.
- Avoid comparing full-count scores across fields with very different team-size norms.
- Treat whole-count values as output participation traces, not individual contribution estimates.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) describes one current approach that views each author of a multi-author publication as the sole author.
- The authors state that this results in inflated scientific impact for multi-author publications.
- They identify bias toward researchers with many collaborations or large teams, including fields such as experimental particle physics and genomics.

## Caveats

- Full counting can be useful for measuring participation or portfolio reach.
- Fractional counting has its own failure modes when contributions are unequal.
- Some team outputs are genuinely indivisible and require qualitative interpretation.

## Links

- [collective credit allocation](../measures/collective_credit_allocation.md)
- [credit allocation priors](../methods/credit_allocation_priors.md)
- [team-output full-credit inflation](team_output_full_credit_inflation.md)
- [full/fractional citation counting](../measures/full_fractional_citation_counting.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; SciSciNet: W2037997493; WoS: unknown]

## Metadata

- Concept ID: `whole_count_team_credit_inflation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: full-count credit inflation; whole-count coauthor inflation; large-team full-credit bias; full paper credit duplication
