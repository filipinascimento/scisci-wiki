# Balanced interdisciplinarity penalty

## Summary

Balanced interdisciplinarity penalty describes the lower observed citation impact associated with papers whose references are spread evenly across disciplines rather than anchored in one disciplinary core with selective outside borrowing.

## Canonical Form

- Unit of analysis: paper, reference-list category distribution, balance factor, or citation outcome.
- Typical representation: evenness or 1-Gini score linked to citation counts, delay scores, or evaluation outcomes.
- Mechanism: evenly distributed interdisciplinary work may be harder to integrate, harder for disciplinary audiences to evaluate, or less anchored to a core audience.
- Empirical signature: higher balance is associated with lower long-term citations after journal and paper-level controls.

## Uses in Science of Science

- Adds a mechanism interpretation to [distributional balance](../measures/distributional_balance.md).
- Helps explain why [interdisciplinarity](interdisciplinarity.md) cannot be evaluated as a single scalar.
- Connects interdisciplinary evaluation to [novelty and conventionality](novelty_conventionality.md), audience fit, and responsible metric design.
- Suggests validation studies comparing observed citation penalties with direct usefulness, expert evaluation, or field-transcending value.

## Operationalization

- Measure how evenly a paper's references are distributed across subject categories, using 1-Gini or a balance factor.
- Estimate citation or evaluation outcomes while separating balance from category count and category disparity.
- Compare a balanced interdisciplinary paper with a paper that has a dominant disciplinary core plus some remote references.
- Test whether lower observed citations reflect integration difficulty, audience mismatch, or evaluation bias.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) recovers a distinct balance factor from paper-level interdisciplinarity indicators.
- Their fixed-effect citation models find that long-term citations decrease as balance increases.
- Wang et al. interpret the pattern in two possible ways: balanced interdisciplinary work may fail to integrate multiple disciplinary logics into something useful, or the discipline-based science system may fail to recognize its value.
- The paper explicitly states that claiming bias against balanced interdisciplinarity would require estimating the unbiased should-be scientific impact and comparing it with observed citations.

## Caveats

- A citation penalty is not proof that balanced interdisciplinary work is lower quality.
- Balance can mean deep integration, diffuse framing, lack of disciplinary core, or indexing artifacts.
- The mechanism needs validation beyond citation counts, such as expert assessment, use traces, or policy and technology uptake.

## Links

- [interdisciplinarity](interdisciplinarity.md)
- [distributional balance](../measures/distributional_balance.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [category variety](../measures/category_variety.md)
- [category disparity](../measures/category_disparity.md)
- [nonlinear interdisciplinarity impact gradients](../validations/nonlinear_interdisciplinarity_impact_gradients.md)
- [journal fixed-effect citation model](../methods/journal_fixed_effect_citation_model.md)
- [novelty and conventionality](novelty_conventionality.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]
- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]

## Metadata

- Concept ID: `balanced_interdisciplinarity_penalty`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: balance citation penalty; balanced IDR penalty; no-core interdisciplinarity penalty; even-reference impact discount
