# Patent claim-scope control

## Summary

Patent claim-scope control is the method of using patent claim count as a scope covariate so broad asserted inventions can be separated from narrower improvements in disruption or impact models.

## Canonical Form

- Unit of analysis: patent, claim, technology class, disruption score, or citation outcome.
- Typical representation: number of claims included as a control variable.
- Method target: account for invention breadth when estimating technological change.
- Empirical signature: disruption or citation models include claim count alongside citation and classification controls.

## Uses in Science of Science

- Complements [patent importance measure divergence](../validations/patent_importance_measure_divergence.md).
- Supports [disruption measure validation](../validations/disruption_measure_validation.md).
- Helps interpret [disruption index](../measures/disruption_index.md) estimates in patent data.
- Adds patent-document structure to technology-change models.

## Operationalization

- Extract independent and total claim counts from patent records.
- Use claim count as a scope or breadth proxy in regression or matching designs.
- Check whether disruptive or consolidating estimates survive claim-scope controls.
- Report claim-count definitions because patent offices and eras differ.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) uses patent claims as a control in models of technological change.
- The paper treats claim count as a way to account for patent scope when estimating disruption and consolidation.
- This helps separate the dynamic-network signal from document-level breadth.

## Caveats

- Claim count is an imperfect scope proxy and can reflect legal strategy.
- Patent-office rules and examiner practices affect claims over time.
- Claims do not directly measure scientific or technological novelty.

## Links

- [patent importance measure divergence](../validations/patent_importance_measure_divergence.md)
- [disruption measure validation](../validations/disruption_measure_validation.md)
- [disruption index](../measures/disruption_index.md)
- [PatentsView utility patent sample](../datasets/patentsview_utility_patent_sample.md)
- [patent application-year time anchor](patent_application_year_time_anchor.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; SciSciNet: W2303284028]

## Metadata

- Concept ID: `patent_claim_scope_control`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Funk and Owen-Smith (2017) (2017)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: claim-count scope control; patent scope covariate; claim breadth control; invention-scope patent control
