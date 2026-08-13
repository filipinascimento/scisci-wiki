# Credit extreme-case sanity checks

## Summary

Credit extreme-case sanity checks test whether a credit-allocation method behaves correctly in simple asymmetric and symmetric coauthor scenarios.

## Canonical Form

- Unit of analysis: target paper, coauthor pair, topical track record, joint-publication history, credit-share vector, or validation example.
- Typical representation: toy cases where one author has a topical body of work versus cases where all relevant work is joint.
- Validation target: ensure credit allocation follows intuitive boundary cases before applying it to complex teams.
- Empirical signature: the method assigns dominant credit to the author with the related track record and equal credit when all relevant work is jointly authored.

## Uses in Science of Science

- Validates [collective credit allocation](../measures/collective_credit_allocation.md).
- Tests the behavior of [credit allocation matrix](../measures/credit_allocation_matrix.md) and [co-citation credit attribution](../methods/co_citation_credit_attribution.md).
- Provides a lightweight sanity-check pattern for new attribution metrics.

## Operationalization

- Construct or identify an asymmetric case where one coauthor has several related papers and the other has only the focal paper.
- Construct or identify a symmetric case where coauthors publish all relevant papers together.
- Apply the credit method to both cases.
- Verify that the resulting credit-share vector matches the expected boundary behavior.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) presents two extreme cases: an asymmetric case where one author has a broader topical track record and a symmetric case where all relevant work is joint.
- The paper uses these cases to motivate what a discipline-independent credit-allocation method should recover.
- Shen and Barabasi show that their method assigns most credit to the topical-track-record author in the asymmetric case and equal credit in the all-joint case.

## Caveats

- Toy cases do not guarantee validity in real, noisy, multi-author settings.
- Intuitive boundary behavior can still encode reputation and visibility assumptions.
- Extreme-case checks should be paired with empirical validations such as Nobel-prize credit validation.

## Links

- [collective credit allocation](../measures/collective_credit_allocation.md)
- [credit allocation matrix](../measures/credit_allocation_matrix.md)
- [credit-share evolution](../measures/credit_share_evolution.md)
- [co-citation credit attribution](../methods/co_citation_credit_attribution.md)
- [Nobel-prize credit validation](nobel_prize_credit_validation.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; SciSciNet: W2037997493; WoS: unknown]

## Metadata

- Concept ID: `credit_extreme_case_sanity_checks`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: credit boundary-case checks; asymmetric symmetric credit test; credit method sanity checks; coauthor credit toy validation
